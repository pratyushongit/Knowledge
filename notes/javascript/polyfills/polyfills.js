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

// CALL

// Original
obj.greet.call(anotherObj, "Hello", "girl");

// Polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "this is not callable");
  }
  context.func = this;
  return context.func(...args);
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
  return context.func(...args);
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
    return context.func(...args, ...innerArgs);
  };
};

const myBindFn = obj.greet.myBind(anotherObj, "Hello");
myBindFn("girl");

// --------------------- Arrays --------------------------

var arr = [3, 1, 62, 89, 31, 7, 6];

// map

//Original
const res = arr.map((el, index, array) => {
  return `The values are: ${el} at index:${index}. The full array:${array}`;
});
console.log(res);

//Polyfill
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }

  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    resArr.push(callback(this[i], i, this));
  }
  return resArr;
};

const myMapRes = arr.myMap((el, index, array) => {
  return `The values are: ${el} at index: ${index}. The full array: ${array}`;
});
console.log(myMapRes);

// FILTER

// Original
const resFilter = arr.filter((el, index, array) => {
  return index % 2 === 0;
});
console.log(resFilter);

//Polyfill
Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }

  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) resArr.push(this[i]);
  }
  return resArr;
};

const myResFilter = arr.myFilter((el, index, array) => {
  return index % 2 === 0;
});
console.log(myResFilter);

// REDUCE

// Original
const resReduce = arr.reduce((prev, curr, index, array) => {
  return prev + curr;
}, 0);
console.log(resReduce);

//Polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }

  for (let i = 0; i < this.length; i++) {
    initialValue = initialValue
      ? callback(initialValue, this[i], i, this)
      : this[i];
  }
  return initialValue;
};

const myResReduce = arr.myReduce((prev, curr, index, array) => {
  return prev + curr;
}, 0);
console.log(myResReduce);

// FOREACH

// Original
arr.forEach((el, index, array) => {
  console.log(
    `The values are: ${el} at index:${index}. The full array:${array}`,
  );
});

// Polyfill

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((el, index, array) => {
  console.log(
    `The values are: ${el} at index:${index}. The full array:${array}`,
  );
});

// EVERY

// Original
const everyRes = arr.every((el, index, array) => {
  return el % 2 === 0;
});
console.log(everyRes);

// Polyfill

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const myEveryRes = arr.myEvery((el, index, array) => {
  return el % 2 === 0;
});

console.log(myEveryRes);

// SOME

// Original
const someRes = arr.some((el, index, array) => {
  return el % 2 === 0;
});
console.log(someRes);

// Polyfill

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const mySomeRes = arr.mySome((el, index, array) => {
  return el % 2 === 0;
});

console.log(mySomeRes);
