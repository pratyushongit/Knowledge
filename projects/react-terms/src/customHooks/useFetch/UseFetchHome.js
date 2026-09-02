const TodoApp = () => {
  const [selectedId, setSelectedId] = (useState < number) | (null > null);

  const {
    data: todos,
    isLoading: listLoading,
    error: listError,
  } = useFetch("https://jsonplaceholder.typicode.com/todos/");

  const detailUrl = selectedId
    ? `https://jsonplaceholder.typicode.com/todos/${selectedId}`
    : "";
  const {
    data: todo,
    isLoading: detailLoading,
    error: detailError,
  } = useFetch(detailUrl);

  if (listLoading) return <p>Loading list...</p>;
  if (listError) return <p>{listError}</p>;

  return (
    <div>
      <ul>
        {todos.map((t) => (
          <li key={t.id} onClick={() => setSelectedId(t.id)}>
            {t.title}
          </li>
        ))}
      </ul>

      {detailLoading && <p>Loading detail...</p>}
      {detailError && <p>{detailError}</p>}
      {todo && <p>{todo.title}</p>}
    </div>
  );
};
