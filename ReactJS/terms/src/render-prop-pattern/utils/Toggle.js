import { useState } from "react";

const Toggle = ({ render }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return render({ checked, handleChange });
};

export default Toggle;
