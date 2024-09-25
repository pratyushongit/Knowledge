import { useEffect } from "react";
import styles from "./List.module.css";

const List = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (params) => {
        if (params[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((p) => p + 1);
        }
      },
      { threshold: 0.5 }
    );
    const lastImage = Array.from(document.querySelectorAll("img")).slice(-1)[0];
    if (!lastImage) return;
    observer.observe(lastImage);

    return () => {
      if (lastImage) observer.unobserve(lastImage);
      observer.disconnect();
    };
  }, [data, setPageNo]);

  return (
    <div className={styles.list__container}>
      {data.map((el) => (
        <img
          src={el.download_url}
          alt="display"
          className={styles.image}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default List;
