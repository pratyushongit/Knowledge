# Prototype

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");

myFather.__proto__
```

```text
{constructor: ƒ}constructor: ƒ Person(first, last, age, eye)__proto__: Object
```

```js
myFather.__proto__.__proto__
```

```text
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

```js
Object.prototype
```

```text
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

```js
Person.prototype
```

```text
{constructor: ƒ}constructor: ƒ Person(first, last, age, eye)__proto__: Object
```

```js
Person.prototype.isPrototypeOf(myFather)
```

```text
true
```

```js
Object.prototype.isPrototypeOf(myFather)
```

```text
true
```

```js
Object.prototype.isPrototypeOf(Person)
```

```text
true
```

```js
Object.getPrototypeOf(myFather)
```

```text
{constructor: ƒ}constructor: ƒ Person(first, last, age, eye)__proto__: Object
```
