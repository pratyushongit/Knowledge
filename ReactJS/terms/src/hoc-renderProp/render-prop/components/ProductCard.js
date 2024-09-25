const ProductCard = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};
export default ProductCard;
