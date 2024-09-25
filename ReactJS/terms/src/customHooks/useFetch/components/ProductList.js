import Product from "./Product";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((el) => (
        <Product key={el.id} product={el} />
      ))}
    </div>
  );
};

export default ProductList;
