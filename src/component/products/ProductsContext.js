import React, { useContext, createContext, useState, useEffect } from "react";
export const ProductsContext = createContext();
const API = "https://api.escuelajs.co/api/v1/products";
const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getProduts = async () => {
      const respon = await fetch(API);
      const data = await respon.json();
      setProduct(data);
    };
    getProduts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
