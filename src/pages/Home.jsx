function Home({ isLoggedIn, onLogin }) {
  return (
    <section className="page">
      <h2>Welcome to the E-Commerce Dashboard</h2>

      <p>
        Manage products, shopping cart, users and checkout
        from one place.
      </p>

      {!isLoggedIn && (
        <button
          className="login-button"
          onClick={onLogin}
        >
          Login as Admin
        </button>
      )}

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Products</h3>
          <p>Manage your product catalog.</p>
        </div>

        <div className="dashboard-card">
          <h3>Cart</h3>
          <p>View and manage shopping cart items.</p>
        </div>

        <div className="dashboard-card">
          <h3>Orders</h3>
          <p>Process customer checkout.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;