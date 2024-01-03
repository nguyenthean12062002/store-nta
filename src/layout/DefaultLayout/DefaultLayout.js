import React, { useState } from "react";
import TopHeader from "../TopHeader/TopHeader";
import Footer from "../Footer";
import Header from "../Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Home from "../../pages/homePages/Home";
import ProductsPages from "../../pages/productsPages/ProductsPages";
import Abouts from "../../pages/aboutsPages/Abouts";
import Contact from "../../pages/contactPages/Contact";
import CartPages from "../../pages/cartPages/CartPages";
import ProductsReview from "../../pages/productsReviewPages/ProductsReview";
import BuyProductsPages from "../../pages/buyProductsPages/BuyProductsPages";
import { ToastContainer } from "react-toastify";

const DefaultLayout = () => {
  return (
    <Router>
      <div className="relative">
        <div className="w-ful ">
          <TopHeader />
        </div>
        <header>
          <Header />
        </header>
        <main className="w-full h-full ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPages />} />
            <Route path="/abouts" element={<Abouts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPages />} />
            <Route path={`/products/id/:id`} element={<ProductsReview />} />
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
};

export default DefaultLayout;
