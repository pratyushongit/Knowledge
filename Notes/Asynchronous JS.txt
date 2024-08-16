//XMLHTTPRequest

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();

request.addEventListener('load', function () {
  const data = this.responseText;
});

//Callback Hell
// Nested callbacks in order to execute async tasks in sequence

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Fetch API

const fetchResponse = fetch(`https://restcountries.com/v2/name/portugal`);
fetchResponse
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// Promises

//NOTE:
//Promise is ES6 feature

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('Promise success');
  } else reject('Promise failed');
});

promise.then(res => {
  console.log(res);
});

//Promise chaining

const url = 'https://jsonplaceholder.typicode.com/todos/';

const myPromise = new Promise((resolve, reject) => {
  resolve(1);
});

myPromise
  .then(data => fetch(`${url}${data}`))
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(_ => {
    console.log('Inside finally');
  });
  

//Handling Promise errors

promise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
//  Note: Catch block returns Promise

//Finally

promise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('Should always be executed at last');
  });

//Throw errors manually

const promise2 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('Promise success');
  } else reject(new Error('Custom error'));
});

promise2.catch(err => {
  console.error(err);
});

//Promise chaining to omit callback hell

//Promisifying setTimeout
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(_ => {
    console.log('wait 1 second');
    return wait(1);
  })
  .then(_ => {
    console.log('wait 2 second');
    return wait(1);
  })
  .then(_ => {
    console.log('wait 3 second');
    return wait(1);
  })
  .then(_ => {
    console.log('wait 4 second');
    return wait(1);
  });


//Fulfill or reject a promise immediately

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('my error')).catch(err => console.log(err));

// NOTE: The Web APIs environment, callback queue and the Event Loop makes asynchronous execution possible in JS even though JS is single threaded.
// Callbacks froming from Promises dont go inside callback queue. It goes inside Microtasks queue.
// Microtasks queue has priority over callback queue.
// Promises are microtasks


//Async await

//was added in ES8
// always returns a promise
// When an await expression is encountered inside a try block, the function containing the await expression is paused, and control is transferred back to the caller until the awaited promise resolves or rejects.

const getData = async () => {
  console.log('a');
  const res = await fetch('https://restcountries.com/v2/name/usa');
  const data = await res.json();
  console.log(data);
  console.log('RESULT');
};
console.log('RESULTTTT');

getData();



// Try catch

try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.log(err);
}



// Try catch error handling

const getData = async () => {
  try {
    console.log('a');
    const res = await fetch('https://restcountriess.com/v2/name/usa');
    const data = await res.json();
    console.log(data);
    console.log('RESULT');
  } catch (err) {
    console.log(err);
  }
};
getData();



//Get success value from async function

const getData = async () => {
  const res = await fetch('https://restcountries.com/v2/name/usa');
  const data = await res.json();
  return data;
};
getData().then(data => console.log(data));


//Get error value from async function

const getData = async () => {
  try {
    console.log('a');
    const res = await fetch('https://restcountriess.com/v2/name/usa');
    const data = await res.json();
    console.log(data);
    console.log('RESULT');
  } catch (err) {
    console.log(err);
    throw err;
  }
};
getData()
  .then()
  .catch(err => console.log('My error ' + err));
  

// Convert promise to async await
const getData = async () => {
  const res = await fetch('https://restcountries.com/v2/name/usa');
  const data = await res.json();
  return data;
};

// Promise:
getData()
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));


//async await IFFE

(async function () {
  try {
    const res = await getData();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  console.log('finally');
})();


// Promise.all combinator

// Wait for all promises to resolve or any to reject.

const myFunc = async () => {

  const promise_one = new Promise((resolve) => {
    setTimeout(resolve, 100, 'one')
  });
  const promise_two = new Promise((resolve) => {
    setTimeout(resolve, 200, 'two')
  });
  const promise_three = new Promise((resolve) => {
    setTimeout(resolve, 300, 'three')
  });

  try {
    const results = await Promise.all([promise_one, promise_two, promise_three]);
    return results;
  } catch (error) {
    	throw error;
  }
}

myFunc().then(data=> console.log(data)).catch(error => console.log(error));

Output- > ["one", "two", "three"]



// Promise.race combinator

// Wait for the first promise to settle.
// this combinator is useful for providing timeouts after a certain interval

const myFunc = async () => {

  const promise_one = new Promise((resolve) => {
    setTimeout(resolve, 1000, 'one')
  });
  const promise_two =new Promise((resolve) => {
    setTimeout(resolve, 2000, 'two')
  });
  const promise_three = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'three')
  });
  
  const timeout = new Promise((_,reject) => setTimeout(reject,500,'timed out'));

  try {
    const results = await Promise.race([promise_one, promise_two, promise_three, timeout]);
    return results;
  } catch (error) {
    throw error;
  }
}

myFunc().then(data=> console.log(data)).catch(error => console.log(error));

Output- > "two"



// Promise.allSettled combinator

// waits for all promises to settle (either resolved or rejected) and provides an array describing the outcome of each promise.
// introduced in ES9

const myFunc = async () => {

  const promise_one = new Promise((resolve) => {
    setTimeout(resolve, 100, 'one')
  });
  const promise_two = new Promise((_,reject) => {
    setTimeout(reject, 200, 'two')
  });
  const promise_three = new Promise((resolve) => {
    setTimeout(resolve, 300, 'three')
  });

  try {
    const results = await Promise.allSettled([promise_one, promise_two, promise_three]);
    return results;
  } catch (error) {
    	throw error;
  }
}

myFunc().then(data=> console.log(data)).catch(error => console.log(error));

Output ->
[{
  status: "fulfilled",
  value: "one"
}, {
  reason: "two",
  status: "rejected"
}, {
  status: "fulfilled",
  value: "three"
}]



//Promise.any combinator

// receives an array of promises
// return type is also a promise
// Wait for the first promise to resolve or handle rejection if all promises reject.
// introduced in ES12

const fun1 = async () => {
  const res = await Promise.any([
    Promise.resolve('success'),
    Promise.reject('error'),
    Promise.resolve('another success'),
  ]);
  console.log(res);
};


// Order of execution

const fun = async () => {
  console.log('2');
  const data = await fetch('');
  console.log('4');
};
console.log('1');
fun();
console.log('3');

Output -> 1 2 3 4