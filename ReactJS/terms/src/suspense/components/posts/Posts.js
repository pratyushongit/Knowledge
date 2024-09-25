import React, { useEffect, useState } from "react";
import { fetchData, use } from "../../shared/Data";
import styles from "./Posts.module.css";

const Posts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = use(fetchData("https://jsonplaceholder.typicode.com/posts"));
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      {data &&
        data.read().map((el) => (
          <div key={el.id} className={styles.posts}>
            <strong>{el.title}</strong>
            <p>{el.body}</p>
          </div>
        ))}
    </>
  );
};

export default Posts;
