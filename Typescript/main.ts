/// <reference path="ambient.d.ts"/>

// Ambient

let myObj = new MyModule.MyClass();
myObj.draw('my drawing');

// Variables

let a : number[] = [1,2,3,4,5];
let b : any[] = [1, true];

// Enum
enum Color { Red = 0, Blue = 1};
let backgroundColor = Color.Red;

// Interface

interface Point {
    x : number,
    y : number
}

let drawFunc = (point : Point)=>{

}

drawFunc({
    x : 10,
    y : 20
})

// Classes

class Shape{
    x : number;
    y : number;

    constructor(){
        this.identity<string>('hello');
    }

    draw(){
        console.log(this.x);
    }

    // Generics
    identity<T>(data : T) : T{
        return data;
    };
    
}

let shape : Shape = new Shape();
shape.draw();