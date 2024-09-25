import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch/utils/useFetch";
import ProductList from "../customHooks/useFetch/components/ProductList";
import Pagination from "./shared/Pagination";

const Home = () => {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <ProductList products={data.slice(page * 10 - 10, page * 10)} />
          <Pagination page={page} setPage={setPage} totalItems={data.length} />
        </div>
      )}
    </>
  );
};

export default Home;
