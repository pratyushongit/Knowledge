import { useState, useTransition } from "react";

const productsList = new Array(10000).fill(0).map((_, i) => `Product ${i + 1}`);

const filteredProducts = (filterTerm) => {
  return filterTerm
    ? productsList.filter((el) => el.includes(filterTerm))
    : productsList;
};

const Products = ({ filteredProductList }) => {
  return (
    <>
      <ul>
        {filteredProductList.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </>
  );
};

const UseTransition = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredProductList = filteredProducts(filterTerm);

  const handleChange = (e) => {
    startTransition(() => setFilterTerm(e.target.value));
  };

  return (
    <>
      <input onChange={handleChange} />
      {isPending && <p>List is loading....</p>}
      <Products filteredProductList={filteredProductList} />
    </>
  );
};

export default UseTransition;
