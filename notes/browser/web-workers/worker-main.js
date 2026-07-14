//Worker
// Workers are used to offload computaion of heavy tasks onto a separate thread from the main thread so that the main thread does not lag while coputing this heavy task.
// Uses postMessage() and onmessage  event for messaging.
// Workers have access to various Web APIs, including fetch(), and Web Storage,
// Workers cannot directly manipulate the DOM

// There are 3 types of workers

// Web Worker
// Run scripts in background threads, separate from the main UI thread.
// Useful for CPU-intensive tasks like data processing, calculations, etc.

const worker = new Worker("./worker.js");

worker.postMessage({ num: 10 });

worker.onmessage((event) => {
  console.log(event.data);
});

worker.onerror((error) => {
  console.log(error.message);
});

// Shared Worker
// Can be accessed by multiple browser tabs/windows from the same origin.

const worker = new SharedWorker("./worker.js");

worker.port.postMessage({ num: 10 });

worker.port.onmessage((event) => {
  console.log(event.data);
});

worker.port.onerror((error) => {
  console.log(error.message);
});

worker.port.start();

// Service Worker
// Act as a network proxy between web app, browser, and network.
// Can intercept and handle network requests, cache resources.
// Enable offline functionality and push notifications.

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
