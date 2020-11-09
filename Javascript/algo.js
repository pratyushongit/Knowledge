// Flatten an Array

let arrayy = [1, 2, 3, [4, 5, 6, [7, 8]]];

let newArr = arrayy.flat(Infinity);
// OR
const flatten = (arr, d=1)=>{
    return  d > 0 ? arr.reduce( (val,curr) => {
        return val.concat(Array.isArray(curr) ? flatten(curr,d-1) : curr)
    }, []) : arr;
}

flatten(arrayy, Infinity);


// Number to Letter in EXCEL
const compute = (column)=>{
  let letter = ''; let temp = 0;
  while (column > 0){
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

// Letter to Number in EXCEL
const operate = (letter)=>{
  let length = letter.length;
  let column = 0;
  for (let index = 0; index < length; index++) {
    column += (letter.toUpperCase().charCodeAt(index) - 64) * (Math.pow(26, length -index -1));
  }
  return column;
}

// Reverse a string O(n)

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
reverseString('hello');

// Reverse a string O(n)

function reverseMyString(str){
  if(str.length == 0){
    return '';
  }
  else{
    return str.slice(-1) + reverseMyString(str.slice(0,str.length - 1));
  }
}

console.log(reverseMyString('Pratyush'));

// Get frequency of every element in a string -> O(n)

let freqStr = "Missisippi";

function frequencyStr(str){
  let loopData = {};
  str = str.toLowerCase().trim();
  for (let index = 0; index < str.length; index++) {
    let element = str[index];    
    loopData[element]  = element && loopData[element]? loopData[element] + 1 : 1;
  }
  return loopData;
}

console.log(frequencyStr(freqStr));

// Anagram Checking - > prat = part -> O(2n)

function anagramStr(str, input){
  if(str.length != input.length){
    return false;
  }
  let loopData = {};
  str = str.toLowerCase().trim();
  for (let index = 0; index < str.length; index++) {
    let element = str[index];
    loopData[element] = element && loopData[element] ? loopData[element] + 1 : 1;
  }
  console.log(loopData);
  input = input.toLowerCase().trim();
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if(!loopData[element]){
      return false;
    }
    loopData[element]--;
  }
  console.log(loopData);
  return true;
}

console.log(anagramStr('tttt oww','tttt wow'));

// Print Fibionacii till a certain number of digits

function fib(limit){
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  for(let i=0 ; i< limit; i++){
      console.log(num1);
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
  }
}

// fib(5);


// Print Fibionacii upto a certain number

function fib(limit){
  let num1 = 0;
  let num2 = 1;
  let sum;
  console.log(num1);
  console.log(num2);
  sum = num1 + num2;
  while(sum <= limit){
      console.log(sum);
      num1 = num2;
      num2 = sum;
      sum = num1 + num2;
  }
}

// fib(5);

console.log(fib(5));

// find the nth Fibonacci number using recursion(1, 1, 2, 3, 5, 8 ….).

var fibRecursive = function(n) {
  if (n<=2) return 1;
  return fibRecursive(n-1) + fibRecursive(n-2);
}

console.log(fibRecursiveMem(3));

// find the nth fibonacci number using dynamic programming -> memoization + recursion(1, 1, 2, 3, 5, 8 ….).

var mem = {};
var fibRecursiveMem = function (n) {
  if (mem[n]) return mem[n];
  if (n<=2) return mem[n] = 1;
  else {
    return mem[n] = fibRecursiveMem(n-1) + fibRecursiveMem(n-2);
  }
}

console.log(fibRecursiveMem(3));

//  Sort an array containing only 1's and 0’s , by only iterating it once , and not using extra memory -> O(n)

const sorter = (input) => {
  let left = 0;
  let right = input.length -1;

  while(left < right){
      while(input[left] == 0 && left < right){
          left++;
      }
      while(input[right] == 1 && left < right){
          right--;
      }
      if(left < right){
          input[left] = 0; 
          input[right] = 1; 
          left++; 
          right--;
      }
  }
  return input;
}

console.log(sorter([1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0]));

// Find max sum of an Array where no 2 elements are Adjacent

function maxNoAdjacent(input) {
  let inc = input[0];
  exc = 0;
  let temp_exc;
  for(let i=1; i< input.length; i++){
      temp_exc = inc;
      inc = Math.max(inc,input[i]+exc);
      exc = temp_exc;
  }
  return (Math.max(inc,exc));
}

console.log(maxNoAdjacent([4,1,1,4,2,1]));

// Given an array, find out the next smaller element for each element

function findNextSmallerElem(source) {
  let output = [...Array(source.length)].map(el=> -1);
  let stack = [];
  for(let i=0; i< source.length; i++){
      let stackTop = stack[stack.length-1] && stack[stack.length-1].val;
      if(stack.length == 0 ||source[i]>= stackTop){
          stack.push({val : source[i], index : i});
      }
      else{
          while(source[i] < (stack[stack.length-1] && stack[stack.length-1].val)){
              output[(stack.pop().index)] = source[i];
          }
          stack.push({val : source[i], index : i})
      }
  }
  return output;
}

console.log(findNextSmallerElem([4,8,5,2,25]));

// Given an array, find out the next greater element for each element

function findNextGreaterElem(source) {
  let output = [...Array(source.length)].map(el=> -1);
  let stack = [];
  for(let i=0; i< source.length; i++){
      let stackTop = stack[stack.length-1] && stack[stack.length-1].val;
      if(source <= stackTop){
          stack.push({val : source[i], index : i});
      }
      else{
          while(source[i] > (stack[stack.length -1] && stack[stack.length -1].val)){
              output[stack.pop().index] = source[i];
          }
          stack.push({val : source[i], index : i});
      }
  }
  return output
}

console.log(findNextGreaterElem([4,8,5,2,25]));

// Find first missing number in an Array sequence

function misingNumInSeq(input){
  let length = input.length;
  let totalSum = (length+1) * (length+2) / 2;
  let sum = input.reduce((p,c)=>{
      return p + c;
  },0);
  return totalSum-sum;
}

console.log(misingNumInSeq([1,2,3,4,5,6,8]));