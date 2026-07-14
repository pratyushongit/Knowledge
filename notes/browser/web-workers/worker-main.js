//Worker 
// https://www.greatfrontend.com/questions/quiz/what-are-workers-in-javascript-used-for

// Web Worker

const myWorker = new Worker("worker.js");

myWorker.onmessage = (message) => {
  console.log(message.data);
};

myWorker.postMessage("Hii Worker");

// Service Worker

navigator.serviceWorker.register("worker.js");
