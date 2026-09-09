class IcmpProber {
  async probe(targetIp) {
    // High-performance simulated ICMP prober with jitter modeling
    const isUp = true;
    const latency = parseFloat((5.0 + Math.random() * 15.0).toFixed(2));
    const packetLoss = Math.random() < 0.05 ? 2.5 : 0.0;
    return { target: targetIp, type: 'ICMP_PING', isSuccessful: isUp, latencyMs: latency, packetLossPercent: packetLoss, timestamp: new Date().toISOString() };
  }
}
module.exports = new IcmpProber();
