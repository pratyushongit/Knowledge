// ------------------Function ------------------------

const person = {
    firstname : 'John',
    lastname : 'Doe',
    run : function(element){
        console.log(`${this.firstname} and ${element}`);
    }
}

const engineer = {
    firstname : 'Mary'
}

const computeInfo = function(state, country){
    console.log(this.firstname + ' ' + this.lastname + ' ' + state + ' ' + country);
}

// CALL

// With Call

person.run.call(engineer,"Electrical");

// Without Call

Function.prototype.myCall = function(obj,...args){
    let myFunc = new Function('tempThis','tempObj','args',`{
        tempObj['fn'] = tempThis;
        return tempObj.fn(...args);
    }`);
    myFunc(this,obj,args) 
}

person.run.myCall(engineer,"Civil");

// APPLY

// With Apply

person.run.apply(engineer,["Electrical"]);

// Without Apply

Function.prototype.myApply = function(obj,args){
    let myFunc = new Function('tempThis','tempObj','args',`{
        tempObj['fn'] = tempThis;
        return tempObj.fn(...args);
    }`);
    myFunc(this,obj,args);
}

person.run.myApply(engineer,["Mechanical"]);

// BIND

// With Bind

const funBind = computeInfo.bind(person, "Karnataka");
funBind("India");

// Without Bind

Function.prototype.myBind = function(...args){
    let obj = this;
    return function(...params){
        obj.apply(args[0], [...args.slice(1),...params]);
    }
}

const newFunBind = computeInfo.myBind(person, "Karnataka");
newFunBind("India");

// --------------------- Arrays --------------------------

var arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber'];

// MAP

// With Map

var mapArr = arr.map((el,index, arr)=>{
    return `${el} + ${index} + ${arr}`;
});

console.log(mapArr);

// Without Map

Array.prototype.myMap = function(callback){
    let myArr = []
    for(let i = 0; i < this.length; i ++){
        myArr.push(callback(this[i],i,this));
    }
    return myArr;
}

var mapArr = arr.myMap((el,index, arr)=>{
    return `${el} + ${index} + ${arr}`;
});

console.log(mapArr);

// FILTER

// With Filter

var filterArr = arr.filter((el,index, arr)=>{
    return el.includes('bi')
});

console.log(filterArr);

// Without Filter

Array.prototype.myFilter = function(callback){
    let myArr = []
    for(let i = 0; i < this.length; i ++){
        if(callback(this[i],i,this)){
            myArr.push(this[i]);
        }   
    }
    return myArr;
}


var filterArr = arr.myFilter((el,index, arr)=>{
    return el.includes('bi')
});

console.log(filterArr);

// REDUCE

// With Reduce

let numArr = [50,20,10,5,5];

var reduceVal = numArr.reduce((prev,curr,index)=>{
    return prev - curr;
});

console.log(reduceVal);

// Without Reduce

Array.prototype.myReduce = function(callback,initial){
    for(let i = 0; i < this.length; i ++){
        if(initial != undefined){
            initial = callback(initial,this[i],i);
        }
        else{
            initial = this[i];
        }     
    }
    return initial;
}

var reduceVal = numArr.myReduce((prev,curr,index)=>{
    return prev - curr;
});

console.log(reduceVal);

// FOREACH

// With Foreach

arr.forEach((el,index, arr)=>{
    console.log(`${index} and ${el} and ${arr}`);
});

// Without Foreach

Array.prototype.myEach = function(callback){
    for(let i = 0; i < this.length; i ++){
        callback(this[i],i,this);
    }
}

arr.myEach((el,index, arr)=>{
    console.log(`${index} and ${el} and ${arr}`);
});

// EVERY

// With Every

var isEvery = numArr.every((el)=>{
    return (el%5 == 0) ;
});

console.log(isEvery);

// Without Every

Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i ++){
        if(!callback(this[i])){
            return false;
        }
    }
    return true;
}


var isEvery = numArr.myEvery((el)=>{
    return (el%5 == 0) ;
});

console.log(isEvery);


// SOME

// With Some

var isSome = numArr.some((el)=>{
    return (el%10 == 0) ;
});

console.log(isSome);

// Without Some


Array.prototype.mySome = function(callback){
    for(let i = 0; i < this.length; i ++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
}

var isSome = numArr.mySome((el)=>{
    return (el%10 == 0) ;
});

console.log(isSome);
