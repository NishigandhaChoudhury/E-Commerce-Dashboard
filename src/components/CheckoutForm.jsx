import { useState } from "react";

function CheckoutForm({ cart, onOrderComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.address
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    onOrderComplete();
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {error && (
        <p className="checkout-error">
          {error}
        </p>
      )}

      <button type="submit" className="place-order-button">
        Place Order
      </button>
    </form>
  );
}

export default CheckoutForm;