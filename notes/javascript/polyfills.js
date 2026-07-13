// ------------------Functions ------------------------

const obj = {
  name: "John",
  greet: function (greeting, gender) {
    console.log(`${greeting}, my name is ${this.name}. I'm a ${gender}`);
  },
};

const anotherObj = {
  name: "Jane",
};

// call

// Original
obj.greet.call(anotherObj, "Hello", "girl");


// Polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "this is not callable");
  }
  context.func = this;
  context.func(...args);
};

obj.greet.myCall(anotherObj, "Hello", "girl");

// APPLY

//Original
obj.greet.apply(anotherObj, ["Hello", "girl"]);

//Polyfill
Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error(this + "this is not callable");
  }
  context.func = this;
  context.func(...args);
};

obj.greet.myApply(anotherObj, ["Hello", "girl"]);

// BIND

// Original
const myFn = obj.greet.bind(anotherObj, "Hello");
myFn("girl");

//Polyfill
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "this is not callable");
  }

  context.func = this;
  return function (...innerArgs) {
    context.func(...args, ...innerArgs);
  };
};

const myApplyFn = obj.greet.myBind(anotherObj, "Hello");
myApplyFn("girl");

// --------------------- Arrays --------------------------

var arr = ["biggy smalls", "bif tannin", "boo radley", "hans gruber"];

// MAP

// With Map

var mapArr = arr.map((el, index, arr) => {
  return `${el} + ${index} + ${arr}`;
});

console.log(mapArr);

// Without Map

Array.prototype.myMap = function (callback) {
  let myArr = [];
  for (let i = 0; i < this.length; i++) {
    myArr.push(callback(this[i], i, this));
  }
  return myArr;
};

var mapArr = arr.myMap((el, index, arr) => {
  return `${el} + ${index} + ${arr}`;
});

console.log(mapArr);

// FILTER

// With Filter

var filterArr = arr.filter((el, index, arr) => {
  return el.includes("bi");
});

console.log(filterArr);

// Without Filter

Array.prototype.myFilter = function (callback) {
  let myArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      myArr.push(this[i]);
    }
  }
  return myArr;
};

var filterArr = arr.myFilter((el, index, arr) => {
  return el.includes("bi");
});

console.log(filterArr);

// REDUCE

// With Reduce

let numArr = [50, 20, 10, 5, 5];

var reduceVal = numArr.reduce((prev, curr, index) => {
  return prev - curr;
});

console.log(reduceVal);

// Without Reduce

Array.prototype.myReduce = function (callback, initial) {
  for (let i = 0; i < this.length; i++) {
    initial = initial ? callback(initial, this[i], i) : this[i];
  }
  return initial;
};

var reduceVal = numArr.myReduce((prev, curr, index) => {
  return prev - curr;
});

console.log(reduceVal);

// FOREACH

// With Foreach

arr.forEach((el, index, arr) => {
  console.log(`${index} and ${el} and ${arr}`);
});

// Without Foreach

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myEach((el, index, arr) => {
  console.log(`${index} and ${el} and ${arr}`);
});

// EVERY

// With Every

var isEvery = numArr.every((el) => {
  return el % 5 == 0;
});

console.log(isEvery);

// Without Every

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

var isEvery = numArr.myEvery((el) => {
  return el % 5 == 0;
});

console.log(isEvery);

// SOME

// With Some

var isSome = numArr.some((el) => {
  return el % 10 == 0;
});

console.log(isSome);

// Without Some

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

var isSome = numArr.mySome((el) => {
  return el % 10 == 0;
});

console.log(isSome);

// Promise

function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled;
  let isRejected;
  let isCalled;
  let value;

  this.then = (cb) => {
    onResolve = cb;

    if (isFulfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = (cb) => {
    onReject = cb;

    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }

    return this;
  };

  const resolve = (val) => {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  };

  const reject = (val) => {
    isRejected = true;
    value = val;
	
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  reject("error");
  // }, 1000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

