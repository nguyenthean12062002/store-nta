import React, { createContext, useState, useEffect } from "react";
export const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const API = process.env.REACT_APP_API_PRODUCTS;
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getProduts = async () => {
      try {
        const respon = await fetch(API);
        const data = await respon.json();
        setProduct(data);
      } catch {
        console.log("Eroor when get data product");
      }
    };
    getProduts();
  }, [API]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
