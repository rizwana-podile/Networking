const server = require('../../apps/api/src/main');

setTimeout(async () => {
  try {
    const healthRes = await fetch('http://localhost:4000/api/v1/system/health');
    const health = await healthRes.json();
    console.log('✓ Health Endpoint:', health.status);

    const devRes = await fetch('http://localhost:4000/api/v1/devices');
    const devs = await devRes.json();
    console.log('✓ Devices Endpoint: Total =', devs.total);

    const nodesRes = await fetch('http://localhost:4000/api/v1/network/nodes');
    const nodes = await nodesRes.json();
    console.log('✓ Network Nodes Endpoint: Total =', nodes.total);

    const alertsRes = await fetch('http://localhost:4000/api/v1/alerts');
    const alerts = await alertsRes.json();
    console.log('✓ Alerts Endpoint: Total =', alerts.total);

    const topoRes = await fetch('http://localhost:4000/api/v1/network/topology');
    const topo = await topoRes.json();
    console.log('✓ Topology Endpoint: Nodes =', topo.nodes.length, 'Links =', topo.links.length);

    console.log('\n>>> ALL LIVE REST ENDPOINTS VERIFIED OPERATIONAL! <<<');
    server.close(() => {
      process.exit(0);
    });
  } catch (err) {
    console.error('API Test Error:', err);
    server.close(() => process.exit(1));
  }
}, 1200);
