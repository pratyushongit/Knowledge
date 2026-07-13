import { IPaginationProps } from "../types";
import styles from "./Pagination.module.css";

const Pagination = ({
  count = 1,
  disabled = false,
  hideNextButton = false,
  hidePrevButton = false,
  onChange,
  page,
  showFirstButton = false,
  showLastButton = false,
}: IPaginationProps) => {
  return (
    <div className={styles["pagination-container"]}>
      {showFirstButton && (
        <button
          className={styles["pagination-item"]}
          onClick={() => onChange(1)}
          disabled={disabled}
        >
          |&larr;
        </button>
      )}
      {!hidePrevButton && (
        <button
          className={styles["pagination-item"]}
          onClick={() => onChange(page - 1)}
          disabled={disabled}
        >
          &larr;
        </button>
      )}
      {Array.from({ length: count }).map((_, index) => (
        <button
          className={`${styles["pagination-item"]} ${
            page === index + 1 ? styles["selected"] : ""
          }`}
          key={index + 1}
          onClick={() => onChange(index + 1)}
          disabled={disabled}
        >
          {index + 1}
        </button>
      ))}
      {!hideNextButton && (
        <button
          className={styles["pagination-item"]}
          onClick={() => onChange(page + 1)}
          disabled={disabled}
        >
          &rarr;
        </button>
      )}
      {showLastButton && (
        <button
          className={styles["pagination-item"]}
          onClick={() => onChange(count)}
          disabled={disabled}
        >
          &rarr;|
        </button>
      )}
    </div>
  );
};

export default Pagination;
