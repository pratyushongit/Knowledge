import React from "react";
import axiosInstance from "./axiosInstance";

const Axios = () => {
  //GET
  const handleGet = async () => {
    try {
      const { data } = await axiosInstance.get("/posts/1", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //GET WITH PARAMS
  const handleGetParams = async () => {
    try {
      const { data } = await axiosInstance.get("/posts/1", {
        params: {
          name: "pratyush",
          age: 20,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //POST
  const handlePost = async () => {
    try {
      const { data } = await axiosInstance.post(
        "/posts",
        {
          title: "foo",
          body: "bar",
          userId: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //PUT
  const handlePut = async () => {
    try {
      const { data } = await axiosInstance.put(
        "/posts/1",
        {
          id: 1,
          title: "foosball",
          body: "crowbar",
          userId: 191,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //PATCH
  const handlePatch = async () => {
    try {
      const { data } = await axiosInstance.patch(
        "/posts/1",
        {
          title: "foodie",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //DELETE
  const handleDelete = async () => {
    try {
      const { data } = await axiosInstance.delete("/posts/1", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleGetParams}>Get with params</button>
      <button onClick={handlePost}>Post</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handlePatch}>Patch</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Axios;
