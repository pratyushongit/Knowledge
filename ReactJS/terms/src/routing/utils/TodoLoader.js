import axios from "axios";

export const todoLoader = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
