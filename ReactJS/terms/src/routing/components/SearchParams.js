import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const set = () => {
    setSearchParams((params) => {
      const query = new URLSearchParams(params);
      query.set("name", "Pratyush");
      return query;
    });
  };

  return (
    <div>
      <h3>{searchParams.get("name")}</h3>
      <button onClick={set}>Set query params</button>
    </div>
  );
};

export default SearchParams;
