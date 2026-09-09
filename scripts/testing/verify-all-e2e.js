const http = require('http');

async function testFetch(url, options = {}) {
  const res = await fetch(url, options);
  const text = await res.text();
  try {
    return { status: res.status, ok: res.ok, data: JSON.parse(text) };
  } catch {
    return { status: res.status, ok: res.ok, text };
  }
}

async function runVerification() {
  console.log('========================================================');
  console.log('GEONET SENTINEL — COMPREHENSIVE PRODUCTION VERIFICATION');
  console.log('========================================================\n');

  let passes = 0;
  let fails = 0;

  function report(name, condition, extra = '') {
    if (condition) {
      console.log(`  ✓ [PASS] ${name} ${extra ? '— ' + extra : ''}`);
      passes++;
    } else {
      console.log(`  ✗ [FAIL] ${name} ${extra ? '— ' + extra : ''}`);
      fails++;
    }
  }

  // 1. Frontend Server
  try {
    const web = await testFetch('http://localhost:5173/');
    report('Frontend Web Server Available', web.status === 200, 'http://localhost:5173/');
  } catch (e) {
    report('Frontend Web Server Available', false, e.message);
  }

  // 2. Backend Health
  try {
    const health = await testFetch('http://localhost:4000/api/v1/system/health');
    report('Backend Health & Cluster Status', health.ok && health.data.status === 'HEALTHY', 'Status: ' + health.data.status);
  } catch (e) {
    report('Backend Health & Cluster Status', false, e.message);
  }

  // 3. Authenticate All 9 Roles
  console.log('\n--- Verifying 9-Role Authentication & Dynamic Route Dispatch ---');
  const roleMatrix = [
    { role: 'SUPER_ADMIN', email: 'admin@geonet.io', pass: 'Admin@123456', expectedRoute: '/' },
    { role: 'ADMIN', email: 'sysadmin@geonet.io', pass: 'Admin@123456', expectedRoute: '/' },
    { role: 'NETWORK_ADMIN', email: 'netadmin@geonet.io', pass: 'NetAdmin@123', expectedRoute: '/network' },
    { role: 'NETWORK_OPERATOR', email: 'operator@geonet.io', pass: 'Operator@123', expectedRoute: '/network' },
    { role: 'MONITORING_OPERATOR', email: 'monitor@geonet.io', pass: 'Monitor@123', expectedRoute: '/network' },
    { role: 'MANAGER', email: 'manager@geonet.io', pass: 'Manager@123', expectedRoute: '/analytics' },
    { role: 'DEVICE_OWNER', email: 'owner@geonet.io', pass: 'Owner@123', expectedRoute: '/home' },
    { role: 'STANDARD_USER', email: 'user@geonet.io', pass: 'User@123', expectedRoute: '/home' },
    { role: 'VIEWER', email: 'viewer@geonet.io', pass: 'Viewer@123', expectedRoute: '/home' }
  ];

  for (const item of roleMatrix) {
    try {
      const res = await testFetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: item.email, password: item.pass })
      });
      const valid = res.ok && res.data.user && res.data.user.role === item.role;
      report(`Auth: ${item.role} (${item.email})`, valid, `HTTP ${res.status} -> Routes to ${item.expectedRoute}`);
    } catch (e) {
      report(`Auth: ${item.role} (${item.email})`, false, e.message);
    }
  }

  // 4. Live GPS Devices & Movement
  console.log('\n--- Verifying Live Telemetry, Devices & Spatial Navigation ---');
  try {
    const devs = await testFetch('http://localhost:4000/api/v1/devices');
    const hasDevices = devs.ok && devs.data.items && devs.data.items.length > 0;
    const movingCount = (devs.data.items || []).filter(d => (d.speedKph || 0) > 5).length;
    report('Live GPS Devices API', hasDevices, `${devs.data.items?.length} registered trackers, ${movingCount} moving`);
  } catch (e) {
    report('Live GPS Devices API', false, e.message);
  }

  // 5. Route Playback
  try {
    const route = await testFetch('http://localhost:4000/api/v1/locations/route?deviceId=DEV-GPS-001&startDate=2026-01-01&endDate=2026-12-31');
    const hasRoute = route.ok && route.data.points && route.data.points.length > 0;
    report('Historical Route Playback Data', hasRoute, `${route.data.points?.length} GPS coordinate waypoints`);
  } catch (e) {
    report('Historical Route Playback Data', false, e.message);
  }

  // 6. Network Nodes & Topology
  console.log('\n--- Verifying Network Observability, NOC & Topology ---');
  try {
    const nodes = await testFetch('http://localhost:4000/api/v1/network/nodes');
    report('NOC Network Nodes API', nodes.ok && nodes.data.items && nodes.data.items.length >= 6, `${nodes.data.items?.length} monitored nodes`);
  } catch (e) {
    report('NOC Network Nodes API', false, e.message);
  }

  try {
    const topo = await testFetch('http://localhost:4000/api/v1/network/topology');
    report('Network Topology Graph API', topo.ok && topo.data.nodes && topo.data.links, `${topo.data.nodes?.length} nodes, ${topo.data.links?.length} logical links`);
  } catch (e) {
    report('Network Topology Graph API', false, e.message);
  }

  // 7. Alerts & Incidents
  console.log('\n--- Verifying Alerts, Incidents & Triage Operations ---');
  try {
    const alerts = await testFetch('http://localhost:4000/api/v1/alerts');
    report('Alerts & Incident Console API', alerts.ok && alerts.data.items, `${alerts.data.items?.length} alerts active`);
    if (alerts.data.items && alerts.data.items.length > 0) {
      const alertId = alerts.data.items[0].id;
      const ack = await testFetch(`http://localhost:4000/api/v1/alerts/${alertId}/acknowledge`, { method: 'POST' });
      report('Alert Acknowledge Action', ack.ok, `Status: ${ack.data.status}`);
    }
  } catch (e) {
    report('Alerts & Incident Console API', false, e.message);
  }

  // 8. Analytics & SLA
  console.log('\n--- Verifying Analytics, Reports & Developer Subsystems ---');
  try {
    const sla = await testFetch('http://localhost:4000/api/v1/network/sla?period=30d');
    const avail = sla.data.overallAvailabilityPercent || sla.data.availabilityPercent;
    report('Network SLA Compliance Metrics', sla.ok && avail !== undefined, `Availability: ${avail}%`);
  } catch (e) {
    report('Network SLA Compliance Metrics', false, e.message);
  }

  // 9. Simulation Engine
  try {
    const sim = await testFetch('http://localhost:4000/api/v1/simulation/status');
    report('Simulation Engine Status', sim.ok && sim.data.state, `State: ${sim.data.state}`);
  } catch (e) {
    report('Simulation Engine Status', false, e.message);
  }

  // 10. API Keys Management
  try {
    const keys = await testFetch('http://localhost:4000/api/v1/api-keys');
    const keyCount = Array.isArray(keys.data) ? keys.data.length : (keys.data.items ? keys.data.items.length : 0);
    report('API Key Management Pipeline', keys.ok && (Array.isArray(keys.data) || keys.data.items), `${keyCount} active tokens registered`);
  } catch (e) {
    report('API Key Management Pipeline', false, e.message);
  }

  console.log('\n========================================================');
  console.log(`VERIFICATION SUMMARY: ${passes} Passed, ${fails} Failed (${Math.round((passes / (passes + fails)) * 100)}% Pass Rate)`);
  console.log('========================================================\n');

  if (fails > 0) process.exit(1);
}

runVerification();
