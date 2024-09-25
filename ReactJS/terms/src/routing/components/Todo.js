import { useLoaderData, useNavigate } from "react-router-dom";

// use Route Loaders
const Todo = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h2>{data.title}</h2>
      <button
        onClick={() => {
          navigate("../");
        }}
      >
        Go Back
      </button>
    </>
  );
};
export default Todo;

// use useParams toget param Data
// const Todo = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(
//           `https://jsonplaceholder.typicode.com/todos/${id}`
//         );
//         setData(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]);

//   return (
//     <>
//       {loading && <p>Loading...</p>}
//       <h2>{data?.title}</h2>
//       <button
//         onClick={() => {
//           navigate("../");
//         }}
//       >
//         Go Back
//       </button>
//     </>
//   );
// };

// export default Todo;
