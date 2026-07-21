// Callback

// in ES5

function square(element, callback) {
  setTimeout(() => {
    callback(element * element);
  }, 1000);
}

square(10, function (data) {
  console.log(data);
});

// in ES6

const sum = (el, callback) => {
  setTimeout(() => {
    callback(el * el);
  }, 1000);
};

sum(20, (data) => {
  console.log(data);
});

// Callback Hell

operate();

function operate() {
  setTimeout(() => {
    let allProd = ["apple", "banana", "potato"];

    setTimeout(
      (product) => {
        let price = 100;

        setTimeout(
          (value) => {
            let quantity = 10;
            console.log(product + "and" + value);
          },
          1000,
          price,
        );
      },
      1000,
      allProd[1],
    );
  }, 1000);
}

// Promises

function operate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["apple", "banana", "potato"]);
    }, 1000);
  });
}

function product(data) {
  return new Promise((resolve, reject) => {
    setTimeout(
      (el) => {
        resolve({ prod: "apple", price: "100" });
      },
      1000,
      data,
    );
  });
}

function price(data) {
  return new Promise((resolve, reject) => {
    setTimeout(
      (el) => {
        resolve({ price: 1000 });
      },
      1000,
      data,
    );
  });
}

// Promise Hell

operate()
  .then((data) => {
    product(data).then((val) => {
      price(val).then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Async await

async function compute() {
  x = await operate();
  return x;
}

compute().then((val) => {
  console.log(val);
});

// Promise Chaining

const sum = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

sum(1, 2)
  .then((data) => {
    return sum(data, 3);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Async Await Chain

const sum = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

const computate = async () => {
  let x = await sum(1, 2);
  let y = await sum(x, 3);
  return y;
};

compute()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Generator Functions -> A JavaScript generator function is a special type of function that can pause its execution mid-way and resume later from where it left off.

function* fun() {
  yield 10;
  yield 20;
  yield 30;
}

// Calling the Generate Function
var gen = fun();
do {
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
} while (!gen.next().done);

// Functions are Objects

function Shape(color) {
  this.color = color;
  this.draw = function () {
    console.log("Inside Draw");
  };
}

const Shape = new Function(
  "color",
  `{
    this.color = 'red';
    this.draw = function(){
      console.log('Inside Draw');
    }
  }`,
);

const circle = new Shape("red");
Shape.call({}, "red");

// Debouncing
// Debouncing is a technique used to improve performance by delaying the execution of a function until after a certain amount of time has passed since the last time the function was called.

const inputElement = document.querySelector("#username");

const fetchData = async (filter) => {
  const data = await fetch(
    `https://api.escuelajs.co/api/v1/products/?title=${filter}`,
  );
  const res = await data.json();
  console.log(res);
};

const debounce = (method, time) => {
  let timeoutId;
  return function (...args) {
    let context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      method.apply(context, args);
    }, time);
  };
};

const debouncedFetchData = debounce(fetchData, 300);

inputElement.addEventListener("keyup", (event) => {
  debouncedFetchData(event.target.value);
});

// Throttling
//  It s an optimisation technique which limits the number of times a function gets executed, irrespective of the number of times the event has been fired.

const getScrollPos = () => {
  console.log(window.scrollY);
};

const throttle = (method, time) => {
  let lastExecuted = 0;
  return function (...args) {
    let context = this;
    const now = Date.now();
    const elapsedTime = now - lastExecuted;
    if (elapsedTime > time) {
      lastExecuted = now;
      method.apply(context, args);
    }
  };
};

const throttledGetScrollPos = throttle(getScrollPos, 1000);

window.addEventListener("scroll", (event) => {
  throttledGetScrollPos();
});

// Factory Function

function createShape() {
  return {
    radius: 10,
    draw: function () {
      console.log(draw);
    },
  };
}

const circle = createShape();

// Closure

const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());

// Spread Parameter

let arr = [1, 2, 3, 4];

const adddd = function (a, ...b) {
  console.log(a, b);
};

adddd(...arr);

// Rest Parameter

const subb = function (a, b, ...args) {
  console.log(a, b, args);
};

subb(1, 2, 3, 4, 5);

// Map

let mapArr = [1, 2, 3, 4, 5, 6];
console.log(mapArr.map((el) => el * el));

// Filter

let filterArr = [{ age: 10 }, { age: 20 }, { age: 50 }, { age: 15 }];
console.log(filterArr.filter((el) => el.age > 30));

// Reduce

let reduceArr = [1, 2, 3, 4, 5];
console.log(
  reduceArr.reduce((p, c, i) => {
    return p + c;
  }, 0),
);

// Call
const john = {
  name: "John",
  draw: function (color) {
    console.log("The color is " + color);
  },
};

const mary = {
  name: "Mary",
};

john.draw.call(mary, "green");

// Apply
john.draw.call(mary, ["yellow"]);

// Bind
const maryFun = john.draw.bind(mary);
maryFun("red");

// Block Scope, Function Scope

var yy = 10;

function wow(yy) {
  yy++;
}

wow(yy);
console.log(yy); // 10

// Max

let a1 = [20, 100, 50, 40, 30];

let x = a1.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(x);

// Min

let a2 = [20, 100, 50, 40, 30];

let x1 = a2.reduce((prev, curr) => {
  return prev < curr ? prev : curr;
});
console.log(x1);

// Sort ascending

let a3 = [20, 100, 50, 40, 30];
a3.sort((a, b) => a - b);

// Sort descending

let a4 = [20, 100, 50, 40, 30];
a4.sort((a, b) => b - a);

// Anonymous Functions

document.querySelector("").addEventListener("click", () => {});

var z = (function () {
  var x = "Hello!!"; // I will invoke myself
  return "I am " + x;
})();

// Hoisting

var text = "outside";
function logIt() {
  console.log(text);
  var text = "inside";
}
logIt(); //undefined

// Navigator API

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});
navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});

// Notification API

const showNotification = () => {
  const notification = new Notification("A new notification!", {
    body: "Hello! How you doing?",
  });

  Notification.requestPermission().then((permission) => {
    if (permission == "granted") {
      showNotification();
    }
  });
};

// Server Sent Events (SSE)
//A server-sent event is when a web page automatically gets updates from a server.

const source = new EventSource("http://localhost:3000/events");

source.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Received:", data);
};

source.onerror = (err) => {
  console.error("SSE error:", err);
};

// To manually close the connection later:
// source.close();

// Drag and Drop

const drag = function (ev) {
  ev.dataTransfer.setData("text", ev.target.id);
};

const allowDrop = function (ev) {
  ev.preventDefault();
};

const drop = function (ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
};

// Fix problems in For Loop of Var -> Enclose within IIFE or use let instead of var

// From
let emptyArray = [];

for (var i = 0; i < 5; i++) {
  emptyArray.push(() => {
    console.log(i);
  });
}
emptyArray.forEach((fn) => fn());

// To
for (var i = 0; i < 5; i++) {
  ((j) => {
    emptyArray.push(() => {
      console.log(j);
    });
  })(i);
}
emptyArray.forEach((fn) => fn());

// Or
for (let i = 0; i < 5; i++) {
  emptyArray.push(() => {
    console.log(i);
  });
}
emptyArray.forEach((fn) => fn());

// Event Bubbling and Capturing/Trickling
// if useCapture flag is true -> catch events in capturing phase
// if useCapture flag is false -> (default) catch events in bubbling phase

document.querySelector("#grandfather").addEventListener(
  "click",
  () => {
    console.log("Grandfather Clicked");
  },
  false,
);

document.querySelector("#father").addEventListener(
  "click",
  () => {
    console.log("Father Clicked");
  },
  false,
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false,
);

// Currying -> Instead of a function taking all its arguments at once, currying transforms it into a chain of functions that each take one argument at a time,
// Currying sum(1)(2)(3)

function sumSimpleCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const sumSimpleCurry = a => b => c => a + b + c;

console.log(sumSimpleCurry(10)(20)(30));

// Currying sumCurry(1)(2)(3)..()

function sumCurry(a) {
  return function (b) {
    if (b) {
      return sumCurry(a + b);
    } else {
      return a;
    }
  };
}

// const sumCurry = a => b => b? sumCurry(a+b) : a;

console.log(sumCurry(2)(4)(6)());

// Convert any function to curried function

const sum = (a, b, c) => a + b + c;

const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  };
};

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6

// Prototypical Inheritance in ES5

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  return this.name;
};

function Student(name, age, batch) {
  Person.call(this, name, age);
  this.batch = batch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getBatch = function () {
  return this.batch;
};

const p = new Person("John", "20");
const s = new Student("John", "20", "Electrical");

//   Prototypical Inheritance in ES6

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, age, branch) {
    super(name, age);
    this.branch = branch;
  }

  getBranch() {
    return this.branch;
  }
}

const p = new Person("John", "20");
const s = new Student("John", "20", "Electrical");

// Method Chaining in Javascript

class Obj {
  constructor() {
    this.value = 0;
  }
  sum(a, b) {
    this.value = a + b;
    return this;
  }
  multiply(a) {
    this.value = this.value * a;
    return this;
  }
}

// Method Chaining

const my = new Obj();
console.log(my.sum(1, 2).multiply(3).value);

$("h1").fadeIn().fadeOut().addClass("red");

// Deep Copy of variables

let person = {
  name: "Pratyush",
  age: 10,
  address: {
    street: "3rd Cross Road",
    pincode: 560100,
  },
};

let deepObj = JSON.parse(JSON.stringify(person));

// Shallow Copy of variables

let newObj = Object.assign({}, person);
let newObj = {
  ...person,
};

// Pass by value

let num = 10;

function inc(num) {
  num++;
}

inc(num);

console.log(num);

// Pass by reference

let num = { age: 10 };

function inc(num) {
  num.age = 20;
}

inc(num);

console.log(num);

//Abstract Class
// It's a class whose instance cannot be created. They also have abstract methods which are declared but not implemented. It provides a blueprint for the sub classes which inherit from it.

//Abstract Class in ES5

function MyAbs(employee) {
  this.emp = employee;
  if (this instanceof MyAbs) {
    throw new Error("ERRORRRR!!!!");
  }
}

MyAbs.prototype.display = function () {
  return this.emp;
};

const emp = new MyAbs("John");

//Abstract Class in ES6

class Abs {
  constructor() {
    if (this.constructor === Abs) {
      throw new Error("ERRORRRR!!!!");
    }
  }

  say() {
    console.log("say");
  }

  do() {}
}

class Abst extends Abs {
  do() {
    console.log("doing");
  }
}

const ab = new Abst();

//Deep copy

function deepCopy(obj) {
  // Check if the input is an object
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return the input directly if it's not an object
  }

  // Create an empty object to hold the copy
  const newObj = Array.isArray(obj) ? [] : {};

  // Iterate through all properties of the object
  for (let key in obj) {
    // Recursively deep copy nested objects
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj; // Return the deep copy
}

// Example usage
const originalObj = {
  prop1: "value1",
  prop2: {
    nestedProp1: "nestedValue1",
    nestedProp2: "nestedValue2",
    nestedProp2: ["a", "b"],
  },
};

const deepCopiedObj = deepCopy(originalObj);
console.log(deepCopiedObj);
