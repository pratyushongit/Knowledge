import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.card}>
      <div>Username: {product.id}</div>
      <div>Name: {product.title}</div>
    </div>
  );
};

export default Product;
