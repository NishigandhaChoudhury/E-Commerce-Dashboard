import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import DebugPanel from "./components/DebugPanel";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [performanceTime, setPerformanceTime] = useState(null);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  function addToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={login}
          onLogout={logout}
        />

        <Navigation cartCount={cart.length} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoggedIn={isLoggedIn}
                  onLogin={login}
                />
              }
            />

            <Route
              path="/products"
              element={
                <Products
                  onAddToCart={addToCart}
                  onPerformanceUpdate={setPerformanceTime}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              }
            />

            <Route
              path="/checkout"
              element={<Checkout cart={cart} />}
            />
          </Routes>
              </main>

              <DebugPanel
                cartCount={cart.length}
                isLoggedIn={isLoggedIn}
                performanceTime={performanceTime}
              />
            </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;