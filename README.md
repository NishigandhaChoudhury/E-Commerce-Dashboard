# E-Commerce Dashboard

A responsive React-based e-commerce admin dashboard built as a functional frontend application.

The project provides product browsing, shopping cart management, mock admin authentication, checkout functionality, error handling, responsive design, performance monitoring, and a live debugging panel.

## Live Demo

[View the live E-Commerce Dashboard](https://nishigandhachoudhury.github.io/E-Commerce-Dashboard/)

## Features

### Product Listing and Management
- Displays products with:
  - Product image
  - Product name
  - Category
  - Rating
  - Price
  - Stock information
- Add products to the shopping cart.

### Shopping Cart
- Add products to cart.
- Increase or decrease product quantity.
- Remove products from cart.
- Automatically calculates individual item totals.
- Automatically calculates the overall cart total.
- Displays the number of products in the cart.

### Mock User Authentication
- Mock Admin login.
- Displays logged-in Admin status.
- Logout functionality.
- No real backend authentication is used.

### Checkout
- Checkout form with:
  - Name
  - Email
  - Address
- Basic form validation.
- Prevents checkout when the cart is empty.
- Displays order confirmation after successful submission.

### Error Handling
- Implemented React Error Boundary.
- Displays a user-friendly error screen when a component encounters an error.
- Provides a Try Again option.

### Responsive Design
- Responsive layout for desktop, tablet, and mobile screen sizes.
- Responsive product grid.
- Responsive navigation and dashboard cards.
- Separate responsive stylesheet.

### Performance Monitoring
- Measures product loading time using the browser Performance API.
- Displays product API load time in milliseconds.

### Live Debugging
A live debug panel displays:
- Authentication status
- Cart item count
- Product loading performance

## Technologies Used

- React.js
- JavaScript
- React Router DOM
- Axios
- Bootstrap
- React Error Boundary
- CSS
- CSS Modules
- Create React App

## Project Structure

```text
ecommerce-dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── DebugPanel.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── components.module.css
│   │   ├── variables.css
│   │   └── responsive.css
│   │
│   ├── utils/
│   │   ├── mockData.js
│   │   ├── api.js
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
