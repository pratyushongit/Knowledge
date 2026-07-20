// AbortController is a built-in JavaScript API that lets you cancel asynchronous operations
// Prevent race conditions (e.g., user searches "a", then "ab", then "abc")

const controller = new AbortController();
const abortButton = document.querySelector(".abortButton");

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then(console.log)
    .catch((error) => `Error: ${error}`);
};

fetchData();

abortButton.addEventListener("click", () => {
  controller.abort();
});
