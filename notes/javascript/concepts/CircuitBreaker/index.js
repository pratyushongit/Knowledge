// Circuit Breaker
// Has 3 states - OPEN, CLOSE, HALF-OPEN
// It's used to prevent the calling of failed methods/api calls repeatedly by opening the circuit(OPEN)
// Then after sometime the failing method is executed once (HALF-OPEN), if it passes the circuit is closed again(CLOSED) and the method execution proceeds naturally

const circuitBreaker = (fn, threshold, buffer) => {
  let failures = 0;
  let toBeExecutedAt = 0;

  return async function (...args) {
    const now = Date.now();
    if (now < toBeExecutedAt) {
      throw new Error("Circuit is open");
    }

    try {
      const result = await fn(...args);
      failures = 0;
      return result;
    } catch (error) {
      failures++;
      if (failures >= threshold) {
        toBeExecutedAt = now + buffer;
      }
      throw error;
    }
  };
};

let count = 0;

const fetchData = () => {
  count++;
  console.log("API Call", count);
  if (count < 4) {
    throw new Error("API Failed");
  }
  return "Success";
};

const failsafe = circuitBreaker(fetchData, 3, 2000);

(async () => {
  try {
    const res = await failsafe();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const res = await failsafe();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const res = await failsafe();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }

  // Circuit is open
  try {
    const res = await failsafe();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }

  // Retrying after toBeExecutedAt time
  setTimeout(async () => {
    try {
      const res = await failsafe();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }, 3000);
})();
