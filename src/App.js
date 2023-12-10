import "./App.css";
import React, { useEffect } from "react";
//layout
import TopHeader from "./layout/TopHeader/TopHeader.js";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer";

// pages
import Home from "./pages/homePages/Home";
// import ProductsReview from "./pages/ProductsReview";
import ProductsPages from "./pages/productsPages/ProductsPages.js";
import Abouts from "./pages/aboutsPages/Abouts";
import Contact from "./pages/contactPages/Contact";
import CartPages from "./pages/cartPages/CartPages";
import LoginPages from "./pages/loginPages/LoginPages";
import ProductsReview from "./pages/productsReviewPages/ProductsReview.js";
import BuyProductsPages from "./pages/buyProductsPages/BuyProductsPages.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      <div className="App">
        <div className="w-ful h-[44px] z-[50]">
          <TopHeader />
        </div>
        <header className="z-[55]">
          <Header />
        </header>
        <main className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPages />} />
            <Route path="/abouts" element={<Abouts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPages />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path={`/products/:id`} element={<ProductsReview />} />
            <Route path="/cart/buy" element={<BuyProductsPages />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
