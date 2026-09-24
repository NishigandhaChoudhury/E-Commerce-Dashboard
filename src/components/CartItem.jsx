function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>₹{item.price.toLocaleString("en-IN")}</p>

        <div className="quantity-controls">
          <button
            onClick={() =>
              onUpdateQuantity(
                item.id,
                item.quantity - 1
              )
            }
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              onUpdateQuantity(
                item.id,
                item.quantity + 1
              )
            }
          >
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>

      <div className="cart-item-total">
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </div>
    </div>
  );
}

export default CartItem;