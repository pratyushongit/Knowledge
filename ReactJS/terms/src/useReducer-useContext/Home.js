import CountProvider from "./CountProvider";
import Counter from "./Counter";

const Home = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

export default Home;
