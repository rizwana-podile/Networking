import { NodeStatus, NodeType, ProbeType } from './enums';
export interface NetworkNode {
  id: string; name: string; hostname: string; ipAddress: string; type: NodeType; status: NodeStatus;
  location?: string; monitoringIntervalSeconds: number; lastCheckAt: string; latencyMs: number; packetLossPercent: number;
  uptimePercent: number; healthScore: number; cpuUtilizationPercent: number; memoryUtilizationPercent: number; diskUtilizationPercent: number;
  activeIncidentsCount: number; isSimulated: boolean; createdAt: string; updatedAt: string;
}
export interface NetworkLink { id: string; sourceNodeId: string; targetNodeId: string; linkType: string; bandwidthMbps: number; latencyMs: number; packetLossPercent: number; status: 'OPTIMAL' | 'DEGRADED' | 'DOWN'; }
export interface TopologyGraph { nodes: NetworkNode[]; links: NetworkLink[]; updatedAt: string; }
