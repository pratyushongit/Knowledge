// Web Worker

onmessage((event) => {
  const res = myFun(event.data);
  postMessage(res);
});

const myFun = (data) => {
  // loop of 1000 length
  console.log("Heavy computation result");
};

// Shared Worker

const connections = [];

onconnect((event) => {
  const port = event.ports[0];
  connections.push(port);

  port.onmessage((event) => {
    const res = myFun(event.data);
    port.postMessage(res);
  });
});

const myFun = (data) => {
  // loop of 1000 length
  console.log("Heavy computation result");
};

// Service Worker

self.addEventListener("install", () => {
  // used to fetch the sw and then parse it
});

self.addEventListener("activate", () => {
  // Clean old caches
});

self.addEventListener("fetch", (event) => {
  // it is a proxy that sits between your page and the network for every single request
  // if the data requrested is present in cache, then serve from cache else hits the api
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else return fetch(event.request);
    }),
  );
});
