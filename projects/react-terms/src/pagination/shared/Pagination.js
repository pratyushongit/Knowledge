import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage, totalItems }) => {
  const handleClick = (pageNo) => {
    if (pageNo !== page && pageNo >= 1 && pageNo <= Math.ceil(totalItems / 10))
      setPage(pageNo);
  };

  return (
    <div className={styles.pagination__tabs}>
      <button onClick={() => handleClick(page - 1)}>Prev</button>
      {Array.from({ length: Math.ceil(totalItems / 10) }, (_, i) => i + 1).map(
        (el) => (
          <button
            key={el}
            onClick={() => handleClick(el)}
            className={page === el ? styles.selected__tab : ""}
          >
            {el}
          </button>
        )
      )}
      <button onClick={() => handleClick(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
