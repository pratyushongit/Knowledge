import React from "react";
import useFetch from "../../customHooks/useFetch/utils/useFetch";
import { useState, useEffect } from "react";
import ProductList from "../../customHooks/useFetch/components/ProductList";
import useDebounce from "../../customHooks/useDebounce/useDebounce";

const Debouncing = () => {
  const [url, setUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error } = useFetch(url);
  const debounceValue = useDebounce(searchTerm);

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/users");
  }, []);

  useEffect(() => {
    const filteredResults = !data
      ? []
      : !debounceValue
      ? data
      : data.filter((el) =>
          el.username.toLowerCase().includes(debounceValue.toLowerCase())
        );
    setFilteredData(filteredResults);
  }, [debounceValue, data]);

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

export default Debouncing;
