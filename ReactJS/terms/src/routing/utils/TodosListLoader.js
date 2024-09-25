import axios from "axios";

export const todosListLoader = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  } catch (error) {
    throw error;
  }
};
