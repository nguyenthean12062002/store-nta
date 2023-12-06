import "./App.css";
import React, { useEffect } from "react";
//layout
import TopHeader from "./layout/TopHeader/TopHeader.js";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer";

// pages
import Home from "./pages/homePages/Home";
// import ProductsReview from "./pages/ProductsReview";
import Products from "./pages/productsPages/Products";
import Abouts from "./pages/aboutsPages/Abouts";
import Contact from "./pages/contactPages/Contact";
import CartPages from "./pages/cartPages/CartPages";
import LoginPages from "./pages/loginPages/LoginPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      <div className="App">
        <div className="w-full h-[44px] ">
          <TopHeader />
        </div>
        <header>
          <Header />
        </header>
        <main className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/abouts" element={<Abouts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPages />} />
            <Route path="/login" element={<LoginPages />} />
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
