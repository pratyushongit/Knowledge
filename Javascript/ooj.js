// function StopWatch(){
//     let stopwatchWorking = false;
//     let startTime  = 0;
//     let stopTime = 0;
//     let duration = 0;

//     function calculateDuration(){
//         let num = (stopTime - startTime)/1000;
//         duration = num;
//     }    

//     this.start = function(){
//         if(!stopwatchWorking){
//             stopwatchWorking = true;
//             startTime = new Date().getTime();
//         } 
//         else{
//             throw new Error('Stopwatch already started');
//         }       
//     }

//     this.stop = function(){
//         if(stopwatchWorking){
//             stopwatchWorking = false;
//             stopTime = new Date().getTime();
//             calculateDuration();
//         } 
//         else{
//             throw new Error('Stopwatch already stopped');
//         }      
//     }

//     this.reset = function(){
//         stopwatchWorking = false;
//         startTime  = 0;
//         stopTime = 0;
//         duration = 0;
//     }

//     Object.defineProperty(this, 'duration', {
//         get : function(){
//             return duration;
//         }
//     });

// }

// let sw = new StopWatch();


// function Shape(color){
//     this.color = color;
// }

// Shape.prototype.duplicate = ()=>{
//     console.log('duplicate');
// }



// function Circle(radius,color){
//     Shape.call(this,color);
//     this.radius = radius;   
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = ()=>{
//     console.log('draw');
// }

// Circle.prototype.duplicate = ()=>{
//     console.log('circle duplicate');
// }


// function Square(radius,color){
//     Shape.call(this,color);
//     this.radius = radius;
// }

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.duplicate = ()=>{
//     console.log('square duplicate');
// }

// const s = new Shape();
// const c = new Circle(10,'red');
// const sq = new Square(10,'yellow');


// let arr = [c,sq];

// for(let value of arr){
//     value.duplicate();
// }

// const canEat = {
//     eat : function(){
//         console.log('eat');
//     }
// }

// const canSwin = {
//     swim : function(){
//         console.log('swim');
//     }
// }

// const canWalk = {
//     walk : function(){
//         console.log('walk');
//     }
// }

// const person = Object.assign({},canEat, canWalk);

// function Person(){

// }

// function mixin(target, ...source){
//     Object.assign(target,...source);
// }

// mixin(Person.prototype,canWalk, canEat);

// person = new Person();

// function HTMLElement(){
//     this.click = function(){
//         console.log('clicked');
//     }
// }

// HTMLElement.prototype.focus = function(){
//     console.log('focused');
// }

// function HTMLSelectElement(items = []){
//     this.items = items;

//    this.addItem = function(item){
//        this.items.push(item);
//         console.log('item added '+ item);
//     }
    
//     this.removeItem = function(item){
//         this.items.pop(item);
//         console.log('item removed ' + item);
//     }

//     this.render = function(data){
//         return "Select Render";
//     }
// }
// const he = new HTMLElement();

// HTMLSelectElement.prototype = he;
// HTMLSelectElement.prototype.constructor = HTMLSelectElement;

// HTMLSelectElement.prototype.blur = function(){
//     console.log('blurred');
// }


// const hse = new HTMLSelectElement();

// function HTMLImageElement(src){

//     this.src = src;

//     this.render = function(data){
//         return "Image Render";
//     }
// }

// HTMLImageElement.prototype = he;

// const img = new HTMLImageElement();

// let arr = [hse,img];

// for(let value of arr){
//     console.log(value.render());
// }

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }

//     draw(){
//         console.log('draw');
//     }
// }

// const c = new Circle(10);

// sum();

// const sum = function(){
//     console.log(x);
// };

// function sum(){
//     console.log('sum');
// }

// console.log(number);
// const number =1 ;

// const sum = (a)=>{
//     return (b)=>{
//         return a + b;
//     }
// }

// const sum = a => b => a+b;

// console.log(sum(1)(2));

// 'use strict';

// const Circle = function(){
//     this.draw = function() {
//         console.log(this);
//     }
// }

// const c = new Circle();
// const draw = c.draw;

// let age = 'myAge';

// let myObj = {
//     name : 'John',
//     [age] : 20,
// }

// Abstraction in function Constructors

// function Circle(radius){
//     let volume = 10;
//     let calculateArea = function(){
//         console.log('area');
//     }
//     this.radius = radius;

//     this.calculateVolume = function(){
//         calculateArea() + volume;
//     }
// }

// const c = new Circle(20);

// Abstraction in Classes

// Symbols

const color = Symbol();
const draw = Symbol();

class Square{
    constructor(radius){
        this.radius = radius;
        this[color] = 'red';
    }

    [draw](){
        console.log('draw');
    }
}


const s = new Square(20);

// WeakMap

const _radius = new WeakMap();
const _move = new WeakMap();
const _privateProps = new WeakMap();

class Triangle{
    constructor(radius){
        _radius.set(this,radius);
        _move.set(this, ()=>{
            console.log('move');
            console.log(this);
        });
        _privateProps.set(this,{
            color : 'red',
            walk : ()=>{
                console.log('walk');
            }
        });
    }

    draw(){
        _move.get(this)();
        console.log(_radius.get(this));
        _privateProps.get(this).walk();
    }

}

const t = new Triangle(20);

// Getters Setters

const _color = new WeakMap();
const _move = new WeakMap();

class Shape{
    constructor(){
        this.radius = 10;
        _color.set(this,'red');
        _move.set(this, ()=>{
            console.log(_color.get(this));
        });
        
    }

    draw(){
        _move.get(this)();
    }

    get X(){
        return _color.get(this);
    }

    set X(value){
        _color.set(this,value);
    }
}

// const s = new Shape();

// function Shape(radius){
//     this.radius = radius;

//     this.eat= function(){
//         console.log('eat');
//     }
// }

// function Circle(radius,color){
//     Shape.call(this,radius);
//     this.color = color;

//     this.draw = function(){
//         console.log('draw');
//     }
// }

// Circle.prototype = Object.assign(Shape.prototype);
// Circle.prototype.constructor = Circle;

// c = new Circle(10,'red');

// const arr = Symbol();

// class Stack {
//     constructor(count = 0){
//         this.count = count;
//         this[arr] = [];
//     }

//     peek(){
//         if(this[arr].length > 0){
//             return this[arr][this[arr].length -1];
//         }
//         else{
//             throw new Error('Stack is empty');
//         }
        
//     }

//     pop(){
//         if(this[arr].length > 0){
//             this[arr].pop();
//             this.count--;
//         }
//         else{
//             throw new Error('Stack is empty');
//         }
        
//     }

//     push(el){
//         this[arr].push(el);
//         this.count++;
//     }
// }


// const s = new Stack();

// const _count = new WeakMap();
// const _arr = new WeakMap();

// class Stack {
//     constructor(count = 0){
//         _arr.set(this, []);
//     }

//     peek(){
//         if(_arr.get(this).length > 0 ){
//            return _arr.get(this)[_arr.get(this).length-1];
//         }
//         else{
//             throw new Error('Stack is empty');
//         }
//     }

//     push(el){
//         _arr.get(this).push(el);
//     }

//     pop(){
//         if(_arr.get(this).length > 0 ){
//             _arr.get(this).pop();
//         }
//         else{
//             throw new Error('Stack is empty');
//         }
//     }

//     get count(){
//         return _arr.get(this).length;
//     }
// }

// const s = new Stack();


