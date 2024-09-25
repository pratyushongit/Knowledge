import styles from "./Fallback.module.css";

const Fallback = () => {
  return (
    <div className={styles.skeleton__panel}>
      <div className={styles.skeleton__line} />
      <div className={styles.skeleton__line} />
      <div className={styles.skeleton__line} />
      <div className={styles.skeleton__line} />
      <div className={styles.skeleton__line} />
    </div>
  );
};

export default Fallback;
