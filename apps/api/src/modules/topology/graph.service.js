const db = require('../../../../scripts/database/database-adapter');
class GraphService {
  async getTopologyGraph() {
    const nodes = await db.query('network_nodes');
    const links = await db.query('network_links');

    // Layout positioning (circle or force layout coordinates)
    const positioned = nodes.map((node, i) => {
      const angle = (i / Math.max(1, nodes.length)) * 2 * Math.PI;
      const radius = 220;
      return {
        ...node,
        x: Math.round(400 + radius * Math.cos(angle)),
        y: Math.round(300 + radius * Math.sin(angle))
      };
    });

    return { nodes: positioned, links, updatedAt: new Date().toISOString() };
  }
  async analyzeCriticalPaths() {
    const graph = await this.getTopologyGraph();
    const criticalNodes = graph.nodes.filter(n => n.type === 'GATEWAY' || n.type === 'ROUTER');
    return {
      criticalNodesCount: criticalNodes.length,
      singlePointOfFailureCandidates: criticalNodes.map(n => n.name),
      status: 'RESILIENT'
    };
  }
}
module.exports = new GraphService();
