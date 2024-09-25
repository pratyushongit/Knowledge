import { useState } from "react";
import useDebounce from "../customHooks/useDebounce/useDebounce";
import useFetch from "../customHooks/useFetch/utils/useFetch";

const Autosuggest = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { data, loading, error } = useFetch(
    debouncedQuery
      ? `https://dummyjson.com/recipes/search?q=${debouncedQuery}`
      : null
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search recipes..."
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autosuggest;
