/**
 * Orchestrator to start API, Worker, and serve frontend
 */
console.log('Starting GeoNet Sentinel Enterprise Cluster...');
require('../../apps/api/src/main');
require('../../apps/worker/src/index');
console.log('GeoNet Sentinel services active:');
console.log('  - API Server: http://localhost:4000');
console.log('  - Worker Daemon: Background prober active');
console.log('  - Web Client: http://localhost:5173 (Run: npm --prefix apps/web run dev)');
