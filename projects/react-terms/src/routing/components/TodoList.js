import { Link, useLoaderData } from "react-router-dom";

const TodoList = () => {
  const data = useLoaderData();

  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`${el.id.toString()}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
