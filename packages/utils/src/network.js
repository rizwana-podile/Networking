function calculatePercentile(values, percentile) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);
  const lower = Math.floor(index); const upper = Math.ceil(index); const weight = index - lower;
  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}
function calculatePacketLoss(sent, received) { return sent > 0 ? (Math.max(0, sent - received) / sent) * 100.0 : 0; }
function calculateAvailabilitySla(uptimeSeconds, totalSeconds) { return totalSeconds > 0 ? Math.min(100.0, Math.max(0.0, (uptimeSeconds / totalSeconds) * 100.0)) : 100.0; }
module.exports = { calculatePercentile, calculatePacketLoss, calculateAvailabilitySla };
