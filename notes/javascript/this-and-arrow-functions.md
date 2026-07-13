# This With Arrow Functions

```js
x = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", play : () => console.log(this)}
x.play()
```

```text
VM3253:1 Window {parent: Window, opener: null, top: Window, length: 3, frames: Window, …}
```

```js
x = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", play : function(){console.log(this)} }
x.play()
```

```text
VM3271:1 {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", play: ƒ}
```

---

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = ()=>{
      console.log(this);
  };
}
var myFather = new Person("John", "Doe", 50, "blue");
myFather.name()
```

```text
VM3410:7 Person {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", name: ƒ}
```

---

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function(){console.log(this)}
}
var myFather = new Person("John", "Doe", 50, "blue");
myFather.name()
```

```text
VM3517:6 Person {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", name: ƒ}
```

---

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
myFather.name = ()=>{
  console.log(this);
};
myFather.name()
```

```text
VM3756:2 Window {parent: Window, opener: null, top: Window, length: 3, frames: Window, …}
```

---

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
myFather.name = function(){
  console.log(this);
};
myFather.name()
```

```text
VM3834:2 Person {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", name: ƒ}
```
