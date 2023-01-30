import NodeCache from "node-cache";

// Cache is used to temporary hold the tokens, other options would be hold in session/ persistant data source
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
