import { useEffect } from "react";
import { useData } from "./DataContext";

const ContextApiComponentTwo = () => {
  const { selectedId, itemData, getItemById, isGetItemsByIdLoading } =
    useData();

  useEffect(() => {
    if (selectedId) getItemById(selectedId);
  }, [selectedId, getItemById]);

  if (isGetItemsByIdLoading) return <p>Loading...</p>;

  return (
    <>
      {itemData && (
        <div>
          <p>Title: {itemData.title}</p>
          <p>Completed: {itemData.completed ? "true" : "false"}</p>
        </div>
      )}
    </>
  );
};

export default ContextApiComponentTwo;
