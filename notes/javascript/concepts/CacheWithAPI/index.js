const cache = new Map();

const fetchData = async (id) => {
  console.log("API triggered");
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const res = await data.json();
  return res;
};

const getData = async (id) => {
  if (!cache.get(id)) {
    const data = await fetchData(id);
    await cache.set(id, data);
  }
  return cache.get(id);
};

getData(3).then((el) => {
  console.log(el);
  getData(3).then(console.log);
});
