import { useState, useDeferredValue } from "react";

const productsList = new Array(10000).fill(0).map((_, i) => `Product ${i + 1}`);

const filteredProducts = (filterTerm) => {
  return filterTerm
    ? productsList.filter((el) => el.includes(filterTerm))
    : productsList;
};

const Products = ({ filteredProductList }) => {
  const list = useDeferredValue(filteredProductList);

  return (
    <>
      <ul>
        {list.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </>
  );
};

const UseDeferredValue = () => {
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProductList = filteredProducts(filterTerm);

  const handleChange = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <>
      <input onChange={handleChange} />
      <Products filteredProductList={filteredProductList} />
    </>
  );
};

export default UseDeferredValue;
