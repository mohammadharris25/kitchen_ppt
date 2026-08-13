import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      {product.tag && <span className="product-tag">{product.tag}</span>}

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-colors">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className="color-dot"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <h3 className="product-name">{product.name}</h3>

      <div className="product-footer">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          + Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
