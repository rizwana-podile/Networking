export function calculatePercentile(values: number[], percentile: number): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);
  const lower = Math.floor(index); const upper = Math.ceil(index); const weight = index - lower;
  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}
export function calculatePacketLoss(sent: number, received: number): number {
  return sent > 0 ? (Math.max(0, sent - received) / sent) * 100.0 : 0;
}
export function calculateAvailabilitySla(uptimeSeconds: number, totalSeconds: number): number {
  return totalSeconds > 0 ? Math.min(100.0, Math.max(0.0, (uptimeSeconds / totalSeconds) * 100.0)) : 100.0;
}
export function calculateJitter(latencies: number[]): number {
  if (latencies.length < 2) return 0;
  let sum = 0;
  for (let i = 1; i < latencies.length; i++) sum += Math.abs(latencies[i] - latencies[i - 1]);
  return sum / (latencies.length - 1);
}
