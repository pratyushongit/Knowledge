import React from "react";
import myImage from "../assets/laughing.svg";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">Home</div>
      <img src={myImage} width="100" height="100" alt="Lauging" />
    </>
  );
};

export default Home;
