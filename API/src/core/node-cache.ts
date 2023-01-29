import NodeCache from "node-cache";

class NodeLocalCache {
  cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
    this.getCurrentCache = this.getCurrentCache.bind(this);
  }

  getCurrentCache() {
    return this.cache;
  }
}

export default NodeLocalCache;
