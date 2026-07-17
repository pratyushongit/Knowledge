// ------------------PROMISE.ALL--------------------

// Original
const promise_one = new Promise((resolve) => {
  setTimeout(resolve, 100, "one");
});
const promise_two = new Promise((resolve) => {
  setTimeout(resolve, 200, "two");
});
const promise_three = new Promise((resolve) => {
  setTimeout(resolve, 300, "three");
});

Promise.all([promise_one, promise_two, promise_three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Polyfill

Promise.myAll = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList))
      return reject(new TypeError("Passed argument should be an array"));
    if (promiseList.length === 0) return resolve([]);

    let results = [];
    let completed = 0;

    promiseList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          results[index] = val;
          completed++;
          if (completed === promiseList.length) resolve(results);
        })
        .catch((err) => reject(err));
    });
  });
};

const my_promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const my_promise_two = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "two");
});
const my_promise_three = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});

Promise.myAll([my_promise_one, my_promise_two, my_promise_three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ---------------------PROMISE.ANY--------------------

// Original
const promise_one = new Promise((resolve) => {
  setTimeout(resolve, 100, "one");
});
const promise_two = new Promise((resolve) => {
  setTimeout(resolve, 200, "two");
});
const promise_three = new Promise((resolve) => {
  setTimeout(resolve, 300, "three");
});

Promise.any([promise_one, promise_two, promise_three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Polyfill

Promise.myAny = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList))
      return reject(new TypeError("Passed argument should be an array"));
    if (promiseList.length === 0) return reject([]);

    let rejected = 0;

    promiseList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          rejected++;
          if (rejected === promiseList.length)
            reject(new Error("All promises failed"));
        });
    });
  });
};

const my_promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const my_promise_two = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "two");
});
const my_promise_three = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});

Promise.myAny([my_promise_one, my_promise_two, my_promise_three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ---------------------PROMISE.ALLSETTLED--------------------

// Original
const promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const promise_two = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "two");
});
const promise_three = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});

Promise.allSettled([promise_one, promise_two, promise_three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Polyfill

Promise.myAllSettled = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList))
      return reject(new TypeError("Passed argument should be an array"));
    if (promiseList.length === 0) return reject([]);

    let result = [];
    let completed = 0;

    promiseList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          result[index] = { staus: "fulfilled", value: val };
        })
        .catch((err) => {
          result[index] = { staus: "rejected", reason: err };
        })
        .finally(() => {
          completed++;
          if (completed === promiseList.length) resolve(result);
        });
    });
  });
};

const my_promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const my_promise_two = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "two");
});
const my_promise_three = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});

Promise.myAllSettled([my_promise_one, my_promise_two, my_promise_three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ---------------------PROMISE.RACE--------------------

// Original
const promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const promise_two = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "two");
});
const promise_three = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});
const timeout = new Promise((_, reject) =>
  setTimeout(reject, 500, "timed out"),
);

Promise.race([promise_one, promise_two, promise_three, timeout])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Polyfill

Promise.myRace = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList))
      return reject(new TypeError("Passed argument should be an array"));

    promiseList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const my_promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
