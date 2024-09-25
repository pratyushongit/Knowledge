import ProductList from "./components/ProductList";
import useFetch from "./utils/useFetch";
import { useState, useEffect } from "react";

const UseFetchHome = () => {
  const [url, setUrl] = useState("");

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/users");
  }, []);

  const handleClick = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts");
  };

  return (
    <>
      <h3>Product list</h3>
      <button onClick={handleClick}>Click me!</button>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {data && <ProductList products={data} />}
    </>
  );
};

export default UseFetchHome;
