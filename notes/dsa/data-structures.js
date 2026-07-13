// Linear Search - O(n)

let linearArr = [10, 2, 4, 26, 3, 4, 7];
let linearElement = 26;

function linearSearch() {
  for (let i = 0; i < linearArr.length; i++) {
    if (linearElement == linearArr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch());

// Binary Search - O(log n)
// works only on sorted arrays

let binaryArr = [2, 3, 4, 6, 7, 10, 26];
let binaryElement = 10;

binaryArr.sort((a, b) => a - b);

const binarySearch = (array, x, start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (array[mid] == x) return mid;
  else if (x < array[mid]) return binarySearch(array, x, start, mid - 1);
  else if (x > array[mid]) return binarySearch(array, x, mid + 1, end);
};

console.log(binarySearch(binaryArr, binaryElement, 0, binaryArr.length - 1));

// Bubble Sort - О(n^2)
// > -> ascending
// < -> decending

let bubbleArr = [2, 10, 4, 26, 3, 4, 7];

function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    arr.forEach((el, i) => {
      if (el > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    });
  } while (swap);
  return arr;
}

console.log(bubbleSort(bubbleArr));

// Selection Sort - O(n^2)

let selectionArr = [10, 2, 4, 26, 3, 4, 7];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(selectionArr));

// Insertion Sort - O(n^2)

let insertionArr = [10, 2, 4, 26, 3, 4, 7];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort(insertionArr));

// Quick Sort - O(n log n)

let quickArr = [10, 2, 4, 26, 3, 4, 7];

function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[0];
  let leftArr = [];
  let rightArr = [];
  for (let index = 1; index < array.length; index++) {
    if (array[index] < pivot) leftArr.push(array[index]);
    else rightArr.push(array[index]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(quickArr));

//Graphs
// Follow -> https://www.youtube.com/watch?v=tWVWeAqZ0WU

// DFS -  Time Complexity -> O(v+e)

const dfs = (graph, start) => {
   const stack = [start];
  while (stack.length > 0){
    const current = stack.pop();
    console.log(current);
    for(let neighbour of graph[current]){
       stack.push(neighbour);
    }
  }
 };
 
  const dfsRecursion = (graph, start) => {
    console.log(start);
    for(let neighbour of graph[start]){
      bfsRecursion(graph, neighbour);
    }
 };
 
 dfs(graph, 'a');
 dfsRecursion(graph, 'a');

// BFS -  Time Complexity -> O(v+e)

 const bfs = (graph, start) => {
 	const queue = [start];
  while( queue.length > 0){
  	const current = queue.shift();
    console.log(current);
     for(let neighbour of graph[current]){
     queue.push(neighbour)
    }
  }
 };

 const graph = {
   a: ['b', 'c'],
   b: ['d'],
   c: ['e'],
   d: ['f'],
   e: [],
   f: [],
 }

 bfs(graph, 'a');
 

 // Check if path exists between source and destination for a directed graph(graph with directions).

 const source = 'f';
 const destination = 'k';

 const dfs = (graph, start) => {
 	const stack = [start];
   while (stack.length > 0){
   	const current = stack.pop();
     if(current === destination) return true;
     for(let neighbours of graph[current]){
     	stack.push(neighbours);
     }
   }
   return false;
 };

 const bfs = (graph, start) => {
 	const queue = [start];
   while (queue.length > 0){
   	const current = queue.shift();
     if(current === destination) return true;
     for(let neighbours of graph[current]){
     	queue.push(neighbours);
     }
   }
   return false;
 };

 const graph = {
 	f: ['g','i'],
   g: ['h'],
   i: ['g','k'],
   j: ['i'],
   k: [],
   h: [],
 }
 
 // Check if path exists between source and destination for a non-directed graph(graph with no directions defined).

//build the graph from edges
 const buildGraph = (edges) => {
   const graph = {};
   for (let [a, b] of edges) {
     if (!graph[a]) graph[a] = [];
     if (!graph[b]) graph[b] = [];
     graph[a].push(b);
     graph[b].push(a);
   }
   return graph;
 };

 const dfs = (edges, start, dest) => {
   const graph = buildGraph(edges);
   const stack = [start];
   const visited = new Set();
   while (stack.length > 0) {
     const current = stack.pop();
     if (current === dest) return true;
     if (visited.has(current)) return false;
     visited.add(current);
     for (let neighbours of graph[current]) {
       stack.push(neighbours);
     }
   }
   return false;
 };
 
 const bfs = (edges, start, dest) => {
   const graph = buildGraph(edges);
   const queue = [start];
   const visited = new Set();
   while (queue.length > 0) {
     const current = queue.shift();
     if (visited.has(current)) return false;
     visited.add(current);
     if (current === dest) return true;
     for (let neighbours of graph[current]) {
       queue.push(neighbours);
     }
   }
   return false;
 };

 const edges = [
   ['i', 'j'],
   ['k', 'i'],
   ['m', 'k'],
   ['k', 'l'],
   ['o', 'n'],
 ];

 console.log(dfs(edges, 'j', 'm')); // true
 console.log(bfs(edges, 'j', 'm')); // true
 console.log(dfs(edges, 'j', 'o')); // false
 
 // Count Connected components
 
 const explore = (graph, current, visited) => {
   current = +current;
   if (visited.has(current)) return false;
   visited.add(current);
   for (let neighbour of graph[current]) {
     explore(graph, neighbour, visited);
   }
   return true;
 };

 const dfs = (graph) => {
   let count = 0;
   const visited = new Set();
   for (let node in graph) {
     if (explore(graph, node, visited)) count++;
   }
   return count;
 };

 const graph = {
   3: [],
   4: [6],
   6: [4, 5, 7, 8],
   8: [6],
   7: [6],
   5: [6],
   1: [2],
   2: [1],
 };

 console.log(dfs(graph)); // 3
 
 // Find the largest component
 
 const explore = (graph, current, visited) => {
   if (visited.has(current)) return 0;
   visited.add(current);
   let size = 1;
   for (let neighbours of graph[current]) {
     size += explore(graph, neighbours, visited);
   }
   return size;
 };

 const dfs = (graph) => {
   let size = 0;
   let largest = 0;
   const visited = new Set();
   for (let node in graph) {
     size = explore(graph, node, visited);
     if (size > largest) largest = size;
   }
   return largest;
 };

 const graph = {
   0: ["8", "1", "5"],
   1: ["0"],
   5: ["0", "8"],
   8: ["0", "5"],
   2: ["3", "4"],
   3: ["2", "4"],
   4: ["3", "2"],
 };

 console.log(dfs(graph)); // 4
 
 // Shortest path - Use BFS always
 
 const buildGraph = (edges) => {
   const graph = {};
   for (let [a, b] of edges) {
     if (!graph[a]) graph[a] = [];
     if (!graph[b]) graph[b] = [];
     graph[a].push(b);
     graph[b].push(a);
   }
   return graph;
 };

 const bfs = (edges, start, end) => {
   const graph = buildGraph(edges);
   const visited = new Set([start]);
   const queue = [[start, 0]];
   while (queue.length > 0) {
     const [current, distance] = queue.shift();
     if (current === end) return distance;
     for (let neighbour of graph[current]) {
       if (!visited.has(neighbour)) {
         visited.add(neighbour);
         queue.push([neighbour, distance + 1]);
       }
     }
   }
   return -1;
 };

 const edges = [
   ["w", "x"],
   ["x", "y"],
   ["z", "y"],
   ["z", "v"],
   ["w", "v"],
 ];

 console.log(bfs(edges, "w", "z")); // 2
 
 // Count the number of islands
 
 const explore = (grid, r, c, visited) => {
   const rowInbounds = r >= 0 && r < grid.length;
   const columnInbounds = c >= 0 && c < grid[0].length;
   if (!rowInbounds || !columnInbounds) return false;

   if (grid[r][c] === "W") return false;

   const pos = r + "," + c;
   if (visited.has(pos)) return false;
   visited.add(pos);
   explore(grid, r - 1, c, visited); // top
   explore(grid, r, c + 1, visited); // right
   explore(grid, r + 1, c, visited); // bottom
   explore(grid, r, c - 1, visited); // left
   return true;
 };

 const dfs = (grid) => {
   const visited = new Set();
   let count = 0;
   for (let i = 0; i < grid.length; i++) {
     for (let j = 0; j < grid[0].length; j++) {  
       if (explore(grid, i, j, visited)) count++;
     }
   }
   return count;
 };

 const grid = [
   ["W", "L", "W", "W", "W"],
   ["W", "L", "W", "W", "W"],
   ["W", "W", "W", "L", "W"],
   ["W", "L", "L", "L", "W"],
   ["W", "L", "W", "L", "L"],
   ["L", "L", "W", "W", "W"],
 ];

 console.log(dfs(grid)); // 2
 
 // Find the smallest island
 
 const explore = (grid, r, c, visited) => {
   let size = 1;
   const rowInbounds = r >= 0 && r < grid.length;
   const columnInbounds = c >= 0 && c < grid[0].length;
   if (!rowInbounds || !columnInbounds) return 0;

   if (grid[r][c] === "W") return 0;

   const pos = r + "," + c;
   if (visited.has(pos)) return 0;
   visited.add(pos);
   size += explore(grid, r - 1, c, visited); // top
   size += explore(grid, r, c + 1, visited); // right
   size += explore(grid, r + 1, c, visited); // bottom
   size += explore(grid, r, c - 1, visited); // left
   return size;
 };

 const dfs = (grid) => {
   const visited = new Set();
   let size = 0;
   let smallest = Infinity;
   for (let i = 0; i < grid.length; i++) {
     for (let j = 0; j < grid[0].length; j++) {
       size += explore(grid, i, j, visited);
       if (size > 0 && size < smallest) smallest = size;
     }
   }
   return smallest;
 };

 const grid = [
   ["W", "L", "W", "W", "W"],
   ["W", "L", "W", "W", "W"],
   ["W", "W", "W", "L", "W"],
   ["W", "L", "L", "L", "W"],
   ["W", "L", "W", "L", "L"],
   ["L", "L", "W", "W", "W"],
 ];

 console.log(dfs(grid));
 
 
 