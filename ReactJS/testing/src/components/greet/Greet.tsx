type Greetprops = {
  name?: string;
};

const Greet = ({ name }: Greetprops) => {
  return <div>Hello {name}</div>;
};

export default Greet;
