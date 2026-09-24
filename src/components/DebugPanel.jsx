function DebugPanel({
  cartCount,
  isLoggedIn,
  performanceTime,
}) {
  return (
    <div className="debug-panel">
      <h3>Live Debug Panel</h3>

      <p>
        <strong>Authentication:</strong>{" "}
        {isLoggedIn ? "Logged in" : "Logged out"}
      </p>

      <p>
        <strong>Cart Items:</strong> {cartCount}
      </p>

      <p>
        <strong>Product API Load Time:</strong>{" "}
        {performanceTime !== null
          ? `${performanceTime.toFixed(2)} ms`
          : "Not measured"}
      </p>
    </div>
  );
}

export default DebugPanel;