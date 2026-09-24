import products from "./mockData";

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(
        (product) => product.id === Number(id)
      );

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 500);
  });
}