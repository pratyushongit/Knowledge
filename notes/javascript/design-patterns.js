// Design Patterns
// It is a solution to common computational problems.
// It is like a blueprint or template which can be modified to, to solve our problems

// CREATIONAL DESIGN PATTERN
// These patterns deal with object creation mechanisms.

// Factory Design Pattern
// Refers to creation of different types of objects

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function Factory() {
  this.create = (name, id) => {
    switch (id) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      default:
        console.log("Invalid");
    }
  };
}

const factory = new Factory();
console.log(factory.create("John", 1));
console.log(factory.create("Ram", 2));

// Singleton Design Pattern
//Used when we want to limit the instance of a class to atmost 1

let Singleton = (function () {
  function Process() {
    this.processInst = 0;
  }
  let pInstance;
  return {
    createInstance: function () {
      return (pInstance = pInstance ? pInstance : new Process());
    },
  };
})();

const i1 = Singleton.createInstance();
const i2 = Singleton.createInstance();
console.log(i1 === i2);

// STRUCTURAL DESIGN PATTERN
// These patterns focus on how classes and objects are composed to form larger structures. 

// Proxy Design Pattern
// A proxy is an object which is like a interface/placeholder to anything.
// This proxy can be an interface/placeholder to anything like an API call or a large object in the memory
// Through proxy we can cache the data coming from an API call and also add some extra functionalities.

function API() {
  this.getData = function (type) {
    console.log("API");
    switch (type) {
      case "banana":
        return "yellow";
      case "apple":
        return "red";
      case "grapes":
        return "green";
      default:
        console.log("Invalid");
    }
  };
}

function Proxy() {
  this.api = new API();
  this.cache = {};
  this.getData = function (type) {
    if (!this.cache[type]) {
      this.cache[type] = this.api.getData(type);
    }
    return this.cache[type];
  };
}

const proxy = new Proxy();
console.log(proxy.getData("apple"));
console.log(proxy.getData("apple"));

// Facade Design Pattern
// It is used to hide complex logic and show a simplified interface to the client

function Age() {
  let calculateAge = (year) => {
    console.log(this);
    this.year = year;
    this.age = 2024 - this.year;
  };

  this.finalAge = function (year) {
    calculateAge(year);
    return this.age;
  };
}

const age = new Age();
console.log(age.finalAge(1993));

// BEHAVIOURIAL DESIGN PATTERN
// These patterns are concerned with the assignment of responsibilities between objects. 

//Strategy Design Pattern
// We encapsulate a group of closely related algos
// These algos are called strategy. A strategy is a function

function USPS() {
  this.calculate = function (package) {
    return package.weight * 1.1;
  };
}

function FEDEX() {
  this.calculate = function (package) {
    return package.weight * 2.1;
  };
}

function Strategy() {
  this.setStrategy = function (obj) {
    this.company = obj;
  };

  this.getResult = function (package) {
    return this.company.calculate(package);
  };
}

const usps = new USPS();
const fedex = new FEDEX();
const package = { weight: 100 };

const strategy = new Strategy();
strategy.setStrategy(fedex);

console.log(strategy.getResult(package));

// Iterator Design Pattern
// Used to iterate over a collection of objects

function Iterator(arr) {
  this.arr = arr;
  this.index = 0;
}

Iterator.prototype.hasNext = function () {
  return this.index < this.arr.length;
};

Iterator.prototype.next = function () {
  return this.arr[this.index++];
};

const it = new Iterator(["Joe", 22, -10, true]);
while (it.hasNext()) {
  console.log(it.next());
}

// Observer Design Pattern
// It refers to a one to many relationship between a subject and multiple observers
// These observers are subscribed to the subject and are waiting for a trigger or a signal from the subject to start it's execution

function Observer1() {
  console.log("Observer1");
}

function Observer2() {
  console.log("Observer2");
}

function Subject() {
  this.observers = [];
}

Subject.prototype.subscribe = function (obj) {
  this.observers.push(obj);
};
Subject.prototype.unsubscribe = function (obj) {
  this.observers = this.observers.filter((el) => el != obj);
};
Subject.prototype.trigger = function () {
  this.observers.forEach((el) => {
    el();
  });
};

const sub = new Subject();
sub.subscribe(Observer1);
sub.subscribe(Observer2);
sub.unsubscribe(Observer2);
sub.trigger();

// Mediator Design Pattern
// A mediator controls the interation between a group of objects
// If an object wants to send a message to another object, it will first send the message to the mediatior
// Then the mediator will forward the message to the respective object
// For example a Chatroom

function Chatroom() {
  this.members = {};
}

Chatroom.prototype.addMember = function (member) {
  this.members[member.name] = member;
  member.chatroom = this;
};

Chatroom.prototype.sendMessage = function (message, from, to) {
  to.receiveMessage(message, from);
};

function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype.sendMessage = function (message, to) {
  chatroom.sendMessage(message, this, to);
};

Member.prototype.receiveMessage = function (message, from) {
  console.log(`From ${from.name} to ${this.name} : ${message}`);
};

const chatroom = new Chatroom();
const prat = new Member("Prat");
const joe = new Member("Joe");

prat.sendMessage("hi", joe);
joe.sendMessage("hello", prat);

// Visitor Design Pattern
// This design pattern is used when we want to add some extra functionalities or methods to an object without modifying an object
// IT is basically used when we want to add some functionalities to a library.
// A visitor function is an object which contains the extra functionality
// The object whose functinalities we want to add, should have an accept function which should accept the visitor function

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.getSalary = function () {
  return this.salary;
};

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

Employee.prototype.accept = function (fn) {
  fn(this);
};

function Visitor(obj) {
  obj.setSalary(obj.getSalary() * 2);
}

const emp = new Employee("John", 1000);
console.log(emp.getSalary());
console.log(emp.salary);
emp.accept(Visitor);
console.log(emp.getSalary());
