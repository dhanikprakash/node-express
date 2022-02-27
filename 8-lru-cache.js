import LRU from "lru-cache";

const options = {
  max:5,
  ttl: 1000 * 1,
  updateAgeOnGet: true,
};

const lruCache = new LRU(options)

module.exports = {lruCache};