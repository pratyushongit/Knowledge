import React, { useEffect, useState } from "react";
import { fetchData, use } from "../../shared/Data";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = use(fetchData("https://jsonplaceholder.typicode.com/users"));
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      {data &&
        data.read().map((el) => (
          <div key={el.id}>
            <strong>{el.name}</strong>
            <p>{el.email}</p>
          </div>
        ))}
    </>
  );
};

export default Users;
