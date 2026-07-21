function CacheWithTimeLimit() {
  this.cache = new Map();
}

CacheWithTimeLimit.prototype.set = function (key, value, duration) {
  this.cache.set(key, {
    value,
    expiresAt: Date.now() + duration,
  });
};

CacheWithTimeLimit.prototype.get = function (key) {
  if (!this.cache.get(key)) return -1;
  const { value, expiresAt } = this.cache.get(key);
  if (expiresAt < Date.now()) {
    this.cache.delete(key);
    return -1;
  }
  return value;
};

const cache = new CacheWithTimeLimit();
cache.set(1, "one", 1000);
cache.set(2, "two", 2000);
cache.set(3, "three", 3000);

console.log(cache.get(2));
console.log(cache.get(1));
