import { IAccordionContext, IAccordionProps } from "../lib/types";
import { createContext, useContext } from "react";
import styles from "./Accordion.module.css";

const AccordionContext = createContext<IAccordionContext | null>(null);

const useAccordionValue = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "useAccordionValue should be usedinside Accordion component"
    );
  }
  return context;
};

const Accordion = ({
  children,
  data,
  activeIndex,
  setActiveIndex,
}: IAccordionProps) => {
  const handleToggle = () => {
    setActiveIndex(data.id === activeIndex ? null : data.id);
  };

  return (
    <AccordionContext.Provider value={{ data, activeIndex, handleToggle }}>
      <div className={styles["container"]}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = function ({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};

Accordion.Toggle = function () {
  const { data, activeIndex, handleToggle } = useAccordionValue();
  return (
    <div className={styles["container__header"]}>
      <p>{data.title}</p>
      <img
        src={
          activeIndex !== data.id
            ? "https://cdn-icons-png.flaticon.com/128/8691/8691698.png"
            : "https://cdn-icons-png.flaticon.com/128/14276/14276479.png"
        }
        alt="Accordion icon"
        className={styles["toggleImg"]}
        onClick={handleToggle}
      />
    </div>
  );
};

Accordion.Panel = function () {
  const { data, activeIndex } = useAccordionValue();
  return (
    <>
      {data.id === activeIndex && (
        <p className={styles["container__body"]}>{data.body}</p>
      )}
    </>
  );
};

export default Accordion;
