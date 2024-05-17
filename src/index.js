import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Products provider
import ProductsProvider from "./component/products/ProductsContext";
// cart provider
import CartProvider from "./component/cart/CartContext";
//loginprovider
import LoginProvider from "./component/login/LoginProvider";
import "react-toastify/dist/ReactToastify.css";
// sideprovider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginProvider>
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
  </LoginProvider>
);
