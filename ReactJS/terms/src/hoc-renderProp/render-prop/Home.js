import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import CardHandler from "./utils/CardHandler";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    setUser({
      name: "Pratyush",
      email: "abc@xyz.com",
    });
    setProduct({ name: "iPhone", price: 20000 });
  }, []);

  return (
    <>
      <div>Home</div>
      <CardHandler render={() => <UserCard user={user} />} />
      <CardHandler render={() => <ProductCard product={product} />} />
    </>
  );
};

export default Home;
