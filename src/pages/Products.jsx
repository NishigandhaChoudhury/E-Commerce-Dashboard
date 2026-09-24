import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";
import { getProducts } from "../utils/api";

function Products({ onAddToCart, onPerformanceUpdate }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const startTime = performance.now();

    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);
      setError("");
    } catch (err) {
      setError("Unable to load products.");
    } finally {
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      onPerformanceUpdate(loadTime);
      setLoading(false);
    }
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>Products</h2>
          <p>Browse and manage available products.</p>
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </div>

      {loading && <p>Loading products...</p>}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {!loading && !error && (
        <ProductList
          products={products}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
}

export default Products;