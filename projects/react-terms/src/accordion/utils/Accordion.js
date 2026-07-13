import styles from "./Accordion.module.css";

const Accordion = ({ data, activeIndex, setActiveIndex }) => {
  const handleToggle = () => {
    setActiveIndex(data.id === activeIndex ? null : data.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p>{data.title}</p>
        <img
          src={
            activeIndex !== data.id
              ? "https://cdn-icons-png.flaticon.com/128/8691/8691698.png"
              : "https://cdn-icons-png.flaticon.com/128/14276/14276479.png"
          }
          alt="Accordion icon"
          className={styles.toggleImg}
          onClick={handleToggle}
        />
      </div>
      {activeIndex === data.id && (
        <p className={styles.container__body}>{data.body}</p>
      )}
    </div>
  );
};

export default Accordion;
