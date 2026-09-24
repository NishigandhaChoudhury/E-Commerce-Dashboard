function Header({
  isLoggedIn,
  onLogin,
  onLogout,
}) {
  return (
    <header className="header">
      <div className="header-container">
        <h1>E-Commerce Dashboard</h1>

        <div className="user-status">
          {isLoggedIn ? (
            <>
              <span>●</span>
              Admin

              <button
                className="auth-button"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="auth-button"
              onClick={onLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;