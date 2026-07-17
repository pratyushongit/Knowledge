// --------------------- Promises --------------------------

// Promise Polyfill
const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class MyPromise {
  #state = STATE.PENDING;
  #value = undefined;
  #onFulfilled = [];
  #onRejected = [];

  constructor(executor) {
    const resolve = (value) => {
      if (this.#state !== STATE.PENDING) return;

      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#onFulfilled.forEach((cb) => cb(value));
      this.#onFulfilled = [];
      this.#onRejected = [];
    };

    const reject = (reason) => {
      if (this.#state !== STATE.PENDING) return;

      this.#value = reason;
      this.#state = STATE.REJECTED;
      this.#onRejected.forEach((cb) => cb(reason));
      this.#onFulfilled = [];
      this.#onRejected = [];
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    onRejected =
      typeof onRejected === "function" ? onRejected : (value) => value;

    return new MyPromise((resolve, reject) => {
      const fulfilled = function (value) {
        queueMicrotask(() => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejected = function (reason) {
        queueMicrotask(() => {
          try {
            const result = onRejected(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.#state === STATE.FULFILLED) fulfilled(this.#value);
      else if (this.#state === STATE.REJECTED) rejected(this.#value);
      else {
        this.#onFulfilled.push(fulfilled);
        this.#onRejected.push(rejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(callback) {
    return this.then(
      (value) => {
        callback();
        return value;
      },
      (reason) => {
        callback();
        throw reason;
      },
    );
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    if (reason instanceof MyPromise) return reason;
    return new MyPromise((_, reject) => {
      reject(reason);
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved!!");
  }, 2000);
});

p.then((el) => console.log(el))
  .catch((err) => console.log(err))
  .finally(() => console.log("cleaning...."));

MyPromise.reject("I am 2nd resolved!!")
  .then((el) => console.log(el))
  .catch((err) => console.log(err));

const p2 = new MyPromise((resolve, reject) => {
  resolve(20);
});
setTimeout(() => {
  p2.then((el) => console.log(`Hi, ${el}`));
}, 4000);
