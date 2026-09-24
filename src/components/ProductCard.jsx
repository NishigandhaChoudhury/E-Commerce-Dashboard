function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <p className="product-rating">
          ⭐ {product.rating}
        </p>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p className="product-stock">
          {product.stock} items in stock
        </p>

        <button
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;