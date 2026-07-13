import { useState } from "react";

const CCApp = ({ render }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        type="number"
      />
      {render(amount)}
    </div>
  );
};

export default CCApp;
