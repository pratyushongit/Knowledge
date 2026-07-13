import List from "./list/List";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=3`
        );
        const responseData = await res.json();
        setData((prev) => [...prev, ...responseData]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNo]);

  return (
    <>
      <List data={data} setPageNo={setPageNo} />
      {loading && <p>Loading....</p>}
    </>
  );
};

export default Home;
