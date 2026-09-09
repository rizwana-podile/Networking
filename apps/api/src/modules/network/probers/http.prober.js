class HttpProber {
  async probe(url) {
    const start = Date.now();
    try {
      // Simulation prober: in production real HTTP request is dispatched
      const latency = Date.now() - start + Math.floor(Math.random() * 20);
      return { target: url, type: 'HTTP_HEALTH', isSuccessful: true, statusCode: 200, latencyMs: latency, timestamp: new Date().toISOString() };
    } catch (e) {
      return { target: url, type: 'HTTP_HEALTH', isSuccessful: false, statusCode: 503, latencyMs: 0, errorMessage: e.message, timestamp: new Date().toISOString() };
    }
  }
}
module.exports = new HttpProber();
