import { accordionData } from "./AccordionData";
import Accordion from "./utils/Accordion";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {accordionData.map((el) => (
        <Accordion
          data={el}
          key={el.id}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default Home;
