// heavy function
const heavyFunction = (x, y) => {
  for (let i = 0; i < 9999999; i++) {}
  return x * y;
};

const memoise = (fn) => {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn.apply(this, args);
    }
    return cache[key];
  };
};

const callMemoisefn = memoise(heavyFunction);

console.time("first call (6,7)");
console.log(callMemoisefn(6, 7));
console.timeEnd("first call (6,7)");

console.time("first call (2,5)");
console.log(callMemoisefn(2, 5));
console.timeEnd("first call (2,5)");

console.time("repeat call (6,7)");
console.log(callMemoisefn(6, 7));
console.timeEnd("repeat call (6,7)");
