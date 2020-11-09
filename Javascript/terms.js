// Callback

// in ES5

function square(element, callback){
    setTimeout(() => {
        callback(element*element);
    }, 1000);
}

square(10,function(data){
    console.log(data);
});

// in ES6

const sum = (el,callback)=>{
    setTimeout(() => {
        callback(20*20);
    }, 1000);
}

sum(20,(data)=>{
    console.log(data);
});

// Callback Hell

operate();

function operate(){
    setTimeout(() => {
        let allProd = ['apple','banana','potato'];

        setTimeout((product) => {
            
            let price = 100;

            setTimeout((value) => {
                let quantity = 10;
                console.log(product + 'and' + value);
            }, 1000, price);

        }, 1000, allProd[1]);
    }, 1000);
}

// Promises

function operate(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['apple','banana','potato']);
        }, 1000);
        
    });
}

function product(data){
    return new Promise((resolve,reject)=>{
        setTimeout((el) => {
            resolve({prod : 'apple', price : '100'});
        }, 1000, data);
        
    });
}

function price(data){
    return new Promise((resolve,reject)=>{
        setTimeout((el) => {
            resolve({price : 1000});
        }, 1000, data);
    });
}

// Promise Hell

operate().then((data)=>{
    product(data).then((val)=>{
        price(val).then((res)=>{
            console.log(res);
        });
    });
}).catch((err)=>{
    console.log(err);
});

operate().then((data)=>{
    return product(data);
}).then((data)=>{
    return price(data);
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


// Async await

async function compute(){
    x = await operate();
    return x;
}

compute().then((val)=>{
    console.log(val);
});

// Promise Chaining

const sum = function(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b);
        }, 1000);
    })
}

sum(1,2).then((data)=>{
    return sum(data,3)
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});


// Async Await Chain

const sum = function(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b);
        }, 1000);
    })
}

const computate = async ()=>{
    let x = await sum(1,2);
    let y = await sum(x,3);
    return y;
}

compute().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

// Generator Functions

function* generator(i){
    yield i;
    yield ++i;
}

let gen = generator(10);

// Functions are Objects

function Shape(color){
    this.color = color;
    this.draw = function(){
      console.log('Inside Draw');
    }
  }
  
  const Shape = new Function('color',`{
    this.color = 'red';
    this.draw = function(){
      console.log('Inside Draw');
    }
  }`);
  
  const circle = new Shape('red');
  Shape.call({},'red');
  

// Debouncing

const fetchAutoSuggest = (data) => {
    // Make api call for each key press
    let value =  document.querySelector('#debounce').value;
    console.log(value);
}

const debounce = (callback, interval)=>{
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(context,args);
        }, interval);
    }
}

const debounceAutoSuggest = debounce(fetchAutoSuggest,300);

// Throttling

const fetchThrottlingAutoSuggest = (data) => {
    // Make api call for each key press
    let value =  document.querySelector('#throttle').value;
    console.log(value);
}

const throttle = (callback, interval)=>{
    let flag = true;
   return function(){
       if(flag){
        let context = this;
        let args = arguments;
        callback.apply(context,args);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, interval);
       }        
   }
}

throttlingAutoSuggest = throttle(fetchThrottlingAutoSuggest, 300);

// Factory Function

function createShape(){
    return{
        radius : 10,
        draw : function(){
            console.log(draw);
        }
    }
}

const circle = createShape();

// Closure

function Shape(radius){
    this.radius =  radius;
    let color = 'red';
    let draw = ()=>{
        console.log('draw me');
    }
    
    this.compute = function(){
        let x = 10; let y = 20;
        console.log(color);
        draw();
    }

    Object.defineProperty(this,'getColor',{
        get : function(){
            return color;
        },
        set : function(val){
            this.color = val;
        }  
    })
}

s = new Shape(10);

// Spread Parameter

let arr = [1,2,3,4]

const adddd = function(a,...b){
    console.log(a,b);
}

adddd(...arr);

// Rest Parameter

const subb = function(...args){
    console.log(args);
}

subb(1,2,3,4,5)

// Map

let mapArr = [1,2,3,4,5,6];
console.log(mapArr.map(el => el*el));

// Filter

let filterArr = [{age : 10}, {age : 20}, {age : 50}, {age : 15}];
console.log(filterArr.filter(el => el.age > 30));

// Reduce

let reduceArr = [1,2,3,4,5];
console.log(reduceArr.reduce((p,c,i)=>{
    return p+c; 
},0));

// Call
const john = {
    name : 'John',
    draw : function(color){
        console.log('The color is ' + color);
    }
}

const mary = {
    name : 'Mary'
}

john.draw.call(mary,'green');

// Apply
john.draw.call(mary,['yellow']);

// Bind
const maryFun = john.draw.bind(mary);
maryFun('red');

// Block Scope, Function Scope

var x= 10;

function wow(name){
    name++;
    x = name;
}

wow(x);
console.log(x);


// Max
a= [20,100,50,40,30];

a.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
})

// Min
a= [20,100,50,40,30];

a.reduce((prev,curr)=>{
    return prev < curr ? prev : curr;
})


// Anonymous Functions

document.querySelector('').addEventListener('click',()=>{

});


var z = (function () {
    var x = "Hello!!";  // I will invoke myself
    return "I am " + x;
})();

// Navigator API

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});
navigator.geolocation.watchPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});

// Notification API

console.log(Notification.permission);

if(Notification.permission != "denied"){
    Notification.requestPermission().then((permission)=>{
        if(permission == "granted"){
            showNotification();
        }
    });
}
else if(Notification.permission == "granted"){
    showNotification();
}

const showNotification = ()=>{
    const notification = new Notification("A new notification!", {
        body : "Hello! How you doing?",
    });

    notification.addEventListener('click',()=>{
        window.location.href = "https://www.google.com";
    });
}

// Server Sent Events (SSE)

var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
  console.log(event.data);
};

// Drag and Drop

const drag = function(ev){
    ev.dataTransfer.setData('text',ev.target.id);
}

const allowDrop = function(ev){
    ev.preventDefault();
}

const drop = function(ev){
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));    
}



// Fix problems in For Loop of Var -> Enclose within IIFE or use let instead of var

// From
let emptyArray = [];

for(var i = 0; i< 5; i++){
    emptyArray.push(()=>{
        console.log(i);
    });
}
// To
for(var i = 0; i< 5; i++){
    ((i)=>{
        emptyArray.push(()=>{
            console.log(i);
        });
    })(i);    
}
// Or
for(let i = 0; i< 5; i++){
    emptyArray.push(()=>{
        console.log(i);
    });
}

// Event Bubbling and Capturing/Trickling

document.querySelector('#grandfather').addEventListener('click',()=>{
    console.log('Grandfather Clicked');
},false);

document.querySelector('#father').addEventListener('click',()=>{
    console.log('Father Clicked');
},false);

document.querySelector('#child').addEventListener('click',()=>{
    console.log('Child Clicked');
},false);

// Currying sum(1)(2)(3)

function sumSimpleCurry(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

// const sumSimpleCurry = a => b => c => a + b + c;

console.log(sumSimpleCurry(10)(20)(30));

// Currying sumCurry(1)(2)(3)..()

function sumCurry(a){
    return function(b){
       if(b){
        return sumCurry(a+b);
       }
       else{
        return a;
       }
    }
}

// const sumCurry = a => b => b? sumCurry(a+b) : a;

console.log(sumCurry(2)(4)(6)());

// Prototypical Inheritance in ES5

function Shape(){
    this.color = 'red';
  }
  
  Shape.prototype.sum = function(){
    console.log('Sum');
  }
  var s = new Shape();
  
  function Circle(){
    Shape.call(this);
    this.radius = 10;
  }
  
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;

  Circle.prototype.draw = function(){
    console.log('Draw');
  }
  
  const c = new Circle();

//   Prototypical Inheritance in ES6

class Shape{
    constructor(color){
        this.color = color;
    }

    duplicate(){
        console.log('Shape Duplicate');
    }
}

class Circle extends Shape{
    constructor(radius,color){
        this.radius = radius;
    }

    duplicate(){
        console.log('Circle Duplicate');
    }
}

// Method Chaining in Javascript

class Obj {
    constructor(){
      this.value = 0;
    }
    sum(a,b){
      this.value = a+b;
      return this;
    }
    multiply(a){
      this.value = this.value * a;
      return this;
    }
  }
  
  // Method Chaining in jQuery
  
  const my = new Obj();
  console.log(my.sum(1,2).multiply(3).value);
  
  $('h1').fadeIn().fadeOut().addClass('red');


// Deep Copy of variables 

let person = {
    name : 'Pratyush',
    age : 10,
    address : {
        street : '3rd Cross Road',
        pincode : 560100
    }
}

let deepObj = JSON.parse(JSON.stringify(person));


// Shallow Copy of variables

let newObj = Object.assign({},person);
let newObj = {
    ...person
};

// Pass by value

let num = 10;

function inc(num){
    num++;
}

inc(num);

console.log(num);

// Pass by reference

let num = {age : 10};

function inc(num){
    num.age = 20;
}

inc(num);

console.log(num);

// Abstract Class

function AbstractClass(empName) {
    this.emp = empName;
    if (this instanceof AbstractClass) {
        throw new Error('Error in creating Instance');
    }
}

AbstractClass.prototype.display = function () {
    return this.emp; 
}

var employee = new AbstractClass();