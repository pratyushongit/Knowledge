import React from "react";
import useFetch from "../../customHooks/useFetch/utils/useFetch";
import { useState, useEffect, useMemo } from "react";
import ProductList from "../../customHooks/useFetch/components/ProductList";

const UseMemoSearch = () => {
  const [url, setUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/users");
  }, []);

  const filteredData = useMemo(
    () =>
      !data
        ? []
        : !searchTerm
        ? data
        : data.filter((el) =>
            el.username.toLowerCase().includes(searchTerm.toLowerCase())
          ),
    [data, searchTerm]
  );

  return (
    <>
      <h3>Product list</h3>
      <input
        type="text"
        placeholder="Enter search item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {data && <ProductList products={filteredData} />}
    </>
  );
};

export default UseMemoSearch;
