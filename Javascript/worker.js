// Web Worker

self.onmessage = (message)=>{
    console.log(message.data);
}

self.postMessage('From Worker');

// Service Worker

self.addEventListener('install',(e)=>{

});

self.addEventListener('activate',(e)=>{

});

self.addEventListener('fetch',(e)=>{
    e.respondWith(e.match(e.request));
});