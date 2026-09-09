/**
 * GeoNet Sentinel Enterprise API & Real-Time Gateway Server
 * Production HTTP Server mounting REST API and WebSocket events.
 */

const http = require('http');
const url = require('url');
const db = require('../../../scripts/database/database-adapter');
const socketGateway = require('./websocket/socket.gateway');
const loginService = require('./modules/auth/login.service');
const registerService = require('./modules/auth/register.service');
const devicesService = require('./modules/devices/devices.service');
const locationsService = require('./modules/locations/locations.service');
const routeService = require('./modules/locations/route.service');
const nodesService = require('./modules/network/nodes.service');
const graphService = require('./modules/topology/graph.service');
const slaService = require('./modules/network/sla.service');
const alertsService = require('./modules/alerts/alerts.service');
const analyticsService = require('./modules/analytics/analytics.service');
const reportsService = require('./modules/reports/reports.service');
const auditService = require('./modules/audit/audit.service');
const apiKeysService = require('./modules/api-keys/api-keys.service');
const simulationService = require('./modules/simulation/simulation.service');
const healthService = require('./modules/system/health.service');

const PORT = process.env.PORT || 4000;

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch { resolve({}); }
    });
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  try {
    // Health & System
    if (pathname === '/api/v1/system/health' && method === 'GET') {
      return sendJson(res, 200, healthService.getHealth());
    }

    // Auth
    if (pathname === '/api/v1/auth/login' && method === 'POST') {
      const body = await parseBody(req);
      const result = await loginService.login(body.email, body.password, req.socket.remoteAddress);
      await auditService.log('LOGIN', 'USER', { email: body.email });
      return sendJson(res, 200, result);
    }
    if (pathname === '/api/v1/auth/register' && method === 'POST') {
      const body = await parseBody(req);
      const result = await registerService.register(body);
      return sendJson(res, 201, result);
    }

    // Devices
    if (pathname === '/api/v1/devices' && method === 'GET') {
      return sendJson(res, 200, await devicesService.listDevices(parsedUrl.query));
    }
    if (pathname === '/api/v1/devices' && method === 'POST') {
      const body = await parseBody(req);
      const result = await devicesService.createDevice(body);
      await auditService.log('DEVICE_CREATE', 'DEVICE', { name: body.name });
      return sendJson(res, 201, result);
    }

    // Locations
    if (pathname === '/api/v1/locations/ingest' && method === 'POST') {
      const body = await parseBody(req);
      const result = await locationsService.ingestLocation(body);
      return sendJson(res, 201, result);
    }
    if (pathname === '/api/v1/locations/route' && method === 'GET') {
      const { deviceId, startDate, endDate } = parsedUrl.query;
      const result = await routeService.getRoute(deviceId, startDate, endDate);
      return sendJson(res, 200, result);
    }

    // Network & Topology
    if (pathname === '/api/v1/network/nodes' && method === 'GET') {
      return sendJson(res, 200, await nodesService.listNodes(parsedUrl.query));
    }
    if (pathname === '/api/v1/network/topology' && method === 'GET') {
      return sendJson(res, 200, await graphService.getTopologyGraph());
    }
    if (pathname === '/api/v1/network/sla' && method === 'GET') {
      return sendJson(res, 200, await slaService.getAvailability(parsedUrl.query.period));
    }

    // Alerts
    if (pathname === '/api/v1/alerts' && method === 'GET') {
      return sendJson(res, 200, await alertsService.listAlerts(parsedUrl.query.status));
    }
    if (pathname.startsWith('/api/v1/alerts/') && pathname.endsWith('/acknowledge') && method === 'POST') {
      const id = pathname.split('/')[4];
      return sendJson(res, 200, await alertsService.acknowledgeAlert(id));
    }
    if (pathname.startsWith('/api/v1/alerts/') && pathname.endsWith('/resolve') && method === 'POST') {
      const id = pathname.split('/')[4];
      const body = await parseBody(req);
      return sendJson(res, 200, await alertsService.resolveAlert(id, 'Operator', body.notes));
    }

    // Analytics & Reports
    if (pathname === '/api/v1/analytics/overview' && method === 'GET') {
      return sendJson(res, 200, await analyticsService.getOverviewMetrics());
    }
    if (pathname === '/api/v1/reports/network-sla' && method === 'GET') {
      const csv = await reportsService.generateNetworkSlaCsv();
      res.writeHead(200, { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename=network-sla.csv' });
      return res.end(csv);
    }

    // API Keys
    if (pathname === '/api/v1/api-keys' && method === 'GET') {
      return sendJson(res, 200, await apiKeysService.listKeys());
    }
    if (pathname === '/api/v1/api-keys' && method === 'POST') {
      const body = await parseBody(req);
      return sendJson(res, 201, await apiKeysService.createKey(body.name, body.scopes));
    }

    // Simulation
    if (pathname === '/api/v1/simulation/status' && method === 'GET') {
      return sendJson(res, 200, simulationService.getStatus());
    }
    if (pathname === '/api/v1/simulation/control' && method === 'POST') {
      const body = await parseBody(req);
      return sendJson(res, 200, simulationService.control(body.action));
    }

    // 404
    sendJson(res, 404, { message: 'Route not found' });
  } catch (err) {
    sendJson(res, 500, { message: err.message || 'Internal Server Error' });
  }
});

server.listen(PORT, () => {
  console.log(`[GeoNet API] Server listening on http://localhost:${PORT}`);
});
module.exports = server;
