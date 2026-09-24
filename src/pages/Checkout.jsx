import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";

function Checkout({ cart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <section className="page">
        <h2>Order Placed Successfully</h2>
        <p>Thank you for your order.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h2>Checkout</h2>

      <CheckoutForm
        cart={cart}
        onOrderComplete={() => setOrderPlaced(true)}
      />
    </section>
  );
}

export default Checkout;