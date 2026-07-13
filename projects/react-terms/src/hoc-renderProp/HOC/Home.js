import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";

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
      <UserCard user={user} />
      <ProductCard product={product} />
    </>
  );
};
export default Home;
