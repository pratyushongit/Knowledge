import { useEffect } from "react";
import { useData } from "./DataContext";

const ContextApiComponentOne = () => {
  const { items, getItems, isGetItemsLoading, setSelectedId } = useData();
  useEffect(() => {
    getItems();
  }, [getItems]);

  if (isGetItemsLoading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <ul>
          {items?.length > 0 &&
            items.map(({ id, title }) => (
              <li key={id}>
                <span>{title}</span>
                <button
                  disabled={isGetItemsLoading}
                  onClick={() => setSelectedId(id)}
                >
                  Fetch data of {id}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ContextApiComponentOne;
