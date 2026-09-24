import CartItem from "../components/CartItem";

function Cart({
  cart,
  onRemove,
  onUpdateQuantity,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <section className="page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

          <div className="cart-summary">
            <h3>
              Total: ₹{total.toLocaleString("en-IN")}
            </h3>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;