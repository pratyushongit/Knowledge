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
          price
        );
      },
      1000,
      allProd[1]
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
      data
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
      data
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

// Generator Functions

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
  }`
);

const circle = new Shape("red");
Shape.call({}, "red");

// Debouncing
// Debouncing is a technique used to improve performance by delaying the execution of a function until after a certain amount of time has passed since the last time the function was called. 

const fetchAutoSuggest = (data) => {
  // Make api call for each key press
  let value = document.querySelector("#debounce").value;
  console.log(value);
};

const debounce = (callback,delay) => {
	let timer;
  return (...args) => {
	let context = this;
  	clearTimeout(timer);
    timer = setTimeout(() => {
    	callback.apply(context, args);
    }, delay)
  }
};

const debounceAutoSuggest = debounce(fetchAutoSuggest, 300);

// Throttling
//  It ensures that the function is called at most once within a specified time interval

const fetchThrottlingAutoSuggest = (data) => {
  // Make api call for each key press
  let value = document.querySelector("#throttle").value;
  console.log(value);
};

const throttle = (callback, delay) => {
	let lastExecution = Date.now();
  return (...args) => {
  	const now = Date.now();
    const elapsedTIme = now - lastExecution;
    if(elapsedTIme > delay){
    	lastExecution = now;
      	callback(...args);
    }
  };
};

throttlingAutoSuggest = throttle(fetchThrottlingAutoSuggest, 300);

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
  }, 0)
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
  const notification = new Notification('A new notification!', {
    body: 'Hello! How you doing?',
  });

  Notification.requestPermission().then(permission => {
    if (permission == 'granted') {
      showNotification();
    }
  });

// Server Sent Events (SSE)
 //A server-sent event is when a web page automatically gets updates from a server.

var source = new EventSource("demo_sse.php");
source.onmessage = function (event) {
  console.log(event.data);
};

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
// To
for (var i = 0; i < 5; i++) {
  ((i) => {
    emptyArray.push(() => {
      console.log(i);
    });
  })(i);
}
// Or
for (let i = 0; i < 5; i++) {
  emptyArray.push(() => {
    console.log(i);
  });
}

// Event Bubbling and Capturing/Trickling
// if useCapture flag is true -> catch events in capturing phase
// if useCapture flag is false -> (default) catch events in bubbling phase

document.querySelector("#grandfather").addEventListener(
  "click",
  () => {
    console.log("Grandfather Clicked");
  },
  false
);

document.querySelector("#father").addEventListener(
  "click",
  () => {
    console.log("Father Clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false
);

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

// Prototypical Inheritance in ES5

function Shape() {
  this.color = "red";
}

Shape.prototype.sum = function () {
  console.log("Sum");
};
var s = new Shape();

function Circle() {
  Shape.call(this);
  this.radius = 10;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("Draw");
};

const c = new Circle();

//   Prototypical Inheritance in ES6

class Shape {
  constructor(color) {
    this.color = color;
  }

  duplicate() {
    console.log("Shape Duplicate");
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    this.radius = radius;
  }

  duplicate() {
    console.log("Circle Duplicate");
  }
}

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

// Method Chaining in jQuery

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
    if (typeof obj !== 'object' || obj === null) {
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
    prop1: 'value1',
    prop2: {
        nestedProp1: 'nestedValue1',
        nestedProp2: 'nestedValue2'
    }
};

const deepCopiedObj = deepCopy(originalObj);
console.log(deepCopiedObj);
