// flatten an Array

let array = [1, 2, 3, [4, 5, 6, [7, 8]]];

let newArr = array.flat(Infinity);
// OR
const flatten = (arr) => {
  return arr.reduce((p, c) => {
    if (Array.isArray(c)) {
      return flatten([...p, ...c]);
    } else {
      return [...p, c];
    }
  }, []);
};

console.log(flatten(array));

// Memoization of a function

const cacheMap = new Map();

function memoizeOne(fn) {
  return (...args) => {
    let key = args.join("_");
    if (cacheMap.get(key)) {
      return cacheMap.get(key);
    } else {
      cacheMap.set(key, fn(...args));
      return cacheMap.get(key);
    }
  };
}

const add = (a, b) => {
  console.log("execute");
  return a + b;
};

const memoizeAdd = memoizeOne(add);

console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(2, 3));

// Reverse a string O(n)

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("hello");

// Reverse a string O(n)

const reverseString = (str) =>
  str.length == 0 ? "" : str.slice(-1) + reverse(str.slice(0, str.length - 1));

console.log(reverseString("ABCDEFG"));

// Get frequency of every element in a string -> O(n) - dynamic programming -> memoization + recursion

let freqStr = "Missisippi";

function frequencyStr(value) {
	let data = {};
	  if (!value) return data;
	  for (let index = 0; index < value.length; index++) {
		data[value[index]] = data[value[index]]? data[value[index]] + 1 : 1
	  }
	return data;
}

console.log(frequencyStr(freqStr));

// Write a function to memoize using closures



// Convert sum(a,b,c) to sum(a)(b)(c)

const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...rest) {
        return curried(...args, ...rest);
      };
    }
  };
};

const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3));

const curriedfn = curry(sum);
console.log(curriedfn(1)(2)(3));

// Anagram Checking - > prat = part -> O(2n) -> O(n)

function anagramStr(str, str2) {
	if (str1.length !== str2.length) return false;

	  let strObj1 = {};
	  let strObj2 = {};

	  for (let i = 0; i < str1.length; i++) {
	    strObj1[str1[i]] = (strObj1[str1[i]] || 0) + 1;
	    strObj2[str2[i]] = (strObj2[str2[i]] || 0) + 1;
	  }

	  for (const key in strObj1) {
	    if (strObj1[key] !== strObj2[key]) return false;
	  }
	  return true;
}

console.log(anagramStr("tttt oww", "tttt wow"));

// Print first <n> Fibionacii digits

function fib(limit) {
  let arr = [0, 1];
  for (let index = 2; index < limit; index++) {
    arr[index] = arr[index - 1] + arr[index - 2];
  }
  return arr;
};

// Print nth Fibionacii element

function fib(limit) {
  let arr = [0, 1];
  for (let index = 2; index < limit; index++) {
    arr[index] = arr[index - 1] + arr[index - 2];
  }
  return arr[limit];
};

// Print nth Fibionacii element using recursion

function fib(index) {
	if (index <= 1) return index;
	return fib(index - 1) + fib(index - 2);
	
	// return index <= 1 ? index : fibionacii(index - 1) + fibionacii(index - 2)
};

console.log(fib(5));

// Factorial

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5));


//  Sort an array containing only 1's and 0’s , by only iterating it once , and not using extra memory -> O(n)

const sorter = (input) => {
  const count = input.filter((el) => el === 0).length;
  return [...Array(count).fill(0), ...Array(input.length - count).fill(1)];
};

console.log(
  sorter([1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0])
);

// Find max sum of an Array where no 2 elements are Adjacent -> O(n)

const dp = {};
function maxNoAdjacent(input, index = 0) {
  if (index >= input.length) return 0;
  if (dp[index]) return dp[index];
  const op1 = input[index] + maxNoAdjacent(input, index + 2);
  const op2 = maxNoAdjacent(input, index + 1);
  return (dp[index] = Math.max(op1, op2));
}

console.log(maxNoAdjacent([4, 1, 1, 4, 2, 1]));

// Given an array, find out the next smaller element for each element -> O(n)

function findNextSmallerElem(source) {
  const output = [...Array(source.length).fill(-1)];
  const stack = [];
  for (let i = 0; i < source.length; i++) {
    if (stack.length == 0 || source[i] >= stack[stack.length - 1]?.val) {
      stack.push({ val: source[i], index: i });
    } else {
      while (source[i] < stack[stack.length - 1]?.val) {
        output[stack.pop().index] = source[i];
      }
      stack.push({ val: source[i], index: i });
    }
  }
  return output;
}

console.log(findNextSmallerElem([4, 8, 5, 2, 25]));

// Given an array, find out the next greater element for each element -> O(n)

function findNextGreaterElem(source) {
  const output = [...Array(source.length).fill(-1)];
  const stack = [];
  for (let i = 0; i < source.length; i++) {
    if (stack.length == 0 || source[i] <= stack[stack.length - 1]?.val) {
      stack.push({ val: source[i], index: i });
    } else {
      while (source[i] > stack[stack.length - 1]?.val) {
        output[stack.pop().index] = source[i];
      }
      stack.push({ val: source[i], index: i });
    }
  }
  return output;
}

console.log(findNextGreaterElem([4, 8, 5, 2, 25]));

// Find first missing number in an Array sequence

function misingNumInSeq(input) {
	let length = input.length + 1; // add 1 because one element is missing
	let totalSum = (length * (length + 1)) / 2;
  let sum = input.reduce((p, c) => {
    return p + c;
  }, 0);
  return totalSum - sum;
}

console.log(misingNumInSeq([1, 2, 3, 4, 5, 6, 8]));

//Find intersection of arrays in an array

const arr = [
  [1, 2, 3, 3],
  [1, 3, 6],
  [1, 3, 7],
  [2, 1, 3, 1],
];

const x = arr.reduce((acc, curr) => {
  return acc.filter((el) => curr.includes(el));
});

console.log([...new Set(x)]); //[1, 3]

// Remove duplicates in an array

const arraydup = [1, 3, 3, 4];

const removeDup = (data) => {
  return data.filter((el, index) => data.indexOf(el) === index);
};

console.log(removeDup(arraydup));

// Given an array of integers, return indices of the two numbers such that they add up to a specific target

const myFunc = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    let index = arr.indexOf(diff);
    if (index != -1  && index !== i) {  // "diffIndex !== index" takes care of same index not being reused
      return [i, index];
    }
  }
  return null;
}

console.log(myFunc([1, 5, 3, 8, 12, 15], 11));

// Given a string of brackets, find if every open bracket has a closing bracket.

const myFunc = (str) => {
	let stack = [];
	let map = {
		'{':'}',
		'[':']',
		'(':')',
	};
	for (let i = 0; i < str.length; i++){
		if(str[i] in map){
			stack.push(str[i]);
		}
		else{
			const lastOpenedBracket = stack.pop();
			if(map[lastOpenedBracket] !== str[i]){
				return false;
			}
		}
	}
	return stack.length === 0;
}

console.log(myFunc('({[]})'));


// Find maximum difference between any two numbers(profit) in an array 

const getProfit = (array) => {
  let profit = 0;
  let min = array[0];
  for (let index = 0; index < array.length; index++) {
    min = array[index] < min ? array[index] : min;
    profit = array[index] - min > profit ? array[index] - min : profit;
  }
  return profit;
};

console.log(getProfit([7, 1, 5, 3, 6, 4]));


// Find second largest element in an array;

const secondLargest = (array) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > largest) {
      secondLargest = largest;
      largest = array[index];
    } else if (array[index] > secondLargest && array[index] !== largest) {
      secondLargest = array[index];
    }
  }
  return secondLargest;
};

secondLargest([10, 4, 78, 2, 66, 10]);


// Reverse an array which has first and last indices

const reverse = (array, first, last) => {
  while (first < last) {
    let t = array[first];
    array[first] = array[last];
    array[last] = t;

    first++;
    last--;
  }
  return array;
};

let myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(myArr, 0, myArr.length - 1));


// Rotate an array k times. -> [1, 2, 3, 4, 5, 6, 7], rotate 3 times -> [5, 6, 7, 1, 2, 3, 4]

const rotate = (array, k) => {
  k = k > array.length ? array.length % k : k;
  //using above reverse method below
  reverse(array, 0, array.length - 1);
  reverse(array, 0, k - 1);
  reverse(array, k, array.length - 1);
  return array;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));


// Return maximum subarray and the max sum of an array -> Kadane's algo

const maxSumSubarray = (array) => {
  let sum = 0;
  let maxSum = array[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStartIndex = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
    if (sum > maxSum) {
      maxSum = sum;
      startIndex = tempStartIndex;
      endIndex = index;
    } else if (sum < 0) {
      sum = 0;
      tempStartIndex = index + 1;
    }
  }
  return { maxSum, aubArray: array.slice(startIndex, endIndex + 1) };
};

console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// Sum of an array using recursion

const recurSum = (array) => {
  if (array.length == 0) return 0;
  return +array.slice(-1) + recurSum(array.slice(0, array.length - 1));
};

console.log(recurSum([1, 2, 3, 4]));


// Fill array with the start to end values

const range = (start, end) => {
  if (start > end) return "";
  return [start, ...range(start + 1, end)];
};

console.log(range(1, 5)); [1,2,3,4,5]

// Pallindrome number (without recursion)

const checkPallindrome = (value) => {
  return value < 0
    ? false
    : value === +value.toString().split("").reverse().join("");
};

console.log(checkPallindrome(121));


// Pallindrome number (with recursion)

const rev = (str) => {
  if (str.length === 0) return "";
  return str.slice(-1) + rev(str.slice(0, str.length - 1));
};

const pallindrome = (num) => {
  if (num < 0) return false;
  num = num.toString();
  return num === rev(num);
};

console.log(pallindrome(121));

// Reverse array using recursion

const revArr = (array) => {
  if (array.length === 0) return [];
  return [...array.slice(-1), ...revArr(array.slice(0, array.length - 1))];
};

console.log(revArr([1, 2, 3, 4, 5]));


// Find all possible subsets of an array -> Backtracking algo

const subset = (array) => {
  let temp = [];
  let result = [];

  const recursiveSubset = (array, i) => {
    if (i === array.length) {
      return result.push([...temp]);
    }

    temp.push(array[i]);
    recursiveSubset(array, i + 1);
    temp.pop();
    recursiveSubset(array, i + 1);
  };
  recursiveSubset(array, 0);
  return result;
};

console.log(subset([1, 2]));

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping interval.
// Return an array of the non-overlapping intervals that cover all the intervals in the input. 
// https://www.youtube.com/watch?v=rGsIZL3jqgE

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

const mergeIntervals = (intervals) => {
	intervals.sort((a,b) => a[0] - b[0]);
	const hasOverlap = (prevEnd, currStart) => {
  	return prevEnd >= currStart;
  }
  const result = [intervals[0]];
  for(let i = 1; i < intervals.length; i++){
  	const lastResult = result[result.length-1];
    if(hasOverlap(lastResult[1],intervals[i][0])){
    	lastResult[0] = Math.min(lastResult[0],intervals[i][0]);
      lastResult[1] = Math.max(lastResult[1],intervals[i][1]);
    }else{
    	result.push(intervals[i]);
    }
  }
  return result;
}

console.log(mergeIntervals(intervals)); // [[1, 6], [8, 10], [15, 18]]

