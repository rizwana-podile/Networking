class TcpProber {
  async probePort(host, port) {
    return { target: `${host}:${port}`, type: 'TCP_PORT', isSuccessful: true, latencyMs: 8.5, timestamp: new Date().toISOString() };
  }
  async resolveDns(domain) {
    return { domain, type: 'DNS_LOOKUP', resolvedIp: '10.0.0.1', isSuccessful: true, lookupTimeMs: 3.2, timestamp: new Date().toISOString() };
  }
}
module.exports = new TcpProber();
