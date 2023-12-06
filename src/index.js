import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//global styles
import GlobalStyles from "./style";
// Products provider
import ProductsProvider from "./component/products/ProductsContext";
// cart provider
import CartProvider from "./component/cart/CartContext";
//loginprovider
import LoginProvider from "./component/login/LoginProvider";
// sideprovider
import SidebarProvider from "./component/sidebar/SidebarContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <LoginProvider>
      <CartProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartProvider>
    </LoginProvider>
  </SidebarProvider>
);
