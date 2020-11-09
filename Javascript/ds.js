// Linear Search - O(n)

let linearArr = [10,2,4,26,3,4,7];
let linearElement = 26;

function linearSearch(){
  for(let i = 0; i < linearArr.length; i ++){
    if(linearElement == linearArr[i]){
      return i;
    }
  }
  return -1;  
}

console.log(linearSearch());

// Binary Search - O(log n)

let binaryArr = [2, 3, 4, 6, 7, 10, 26];
let binaryElement = 10;

binaryArr.sort((a,b)=> a-b);

function binarySearch(arr, x, start, end){
  if(start > end){
    return -1
  }
  let mid = Math.floor((start+end)/2);
  if(arr[mid] == x){
    return mid;
  }
  else if(arr[mid] > x){
    return binarySearch(arr,x,start,mid-1);
  }
  else if(arr[mid] < x){
    return binarySearch(arr,x,mid+1,end);
  }
}

console.log(binarySearch(binaryArr , binaryElement, 0, binaryArr.length - 1));

// Bubble Sort - О(n^2)

let bubbleArr = [10,2,4,26,3,4,7];

function bubbleSort(arr){
  let swap;
  do{
    swap = false;
    arr.forEach((el,i)=>{
      if(el > arr[i+1] ){
        let temp = el;
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swap = true;
      }
    });
  }while(swap);
  return arr;
}

console.log(bubbleSort(bubbleArr));

// Selection Sort - O(n^2)

let selectionArr = [10,2,4,26,3,4,7];

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(min != i){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(selectionArr));

// Insertion Sort - O(n^2)

let insertionArr = [10,2,4,26,3,4,7];

function insertionSort(arr){
  for(let i = 1; i < insertionArr.length; i++){
    for(let j = i; j > 0; j--){
      if(arr[j] < arr[j-1]){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      else{
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort(insertionArr));

// Quick Sort - O(n log n)

let quickArr = [10,2,4,26,3,4,7];

function quickSort(arr){
  if(arr.length == 1){
    return arr;
  }  
  else{
    let pivot = arr[arr.length-1];
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i< arr.length-1; i++){
      if(arr[i]<pivot){
        leftArr.push(arr[i]);
      }
      else if(arr[i] >= pivot){
        rightArr.push(arr[i]);
      }
    }
    if(leftArr.length > 0 && rightArr.length > 0){
      return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
    }
    else if(leftArr.length > 0){
      return [...quickSort(leftArr),pivot];
    }
    else{
      return [pivot,...quickSort(rightArr)];
    }
  }

}

console.log(quickSort(quickArr));