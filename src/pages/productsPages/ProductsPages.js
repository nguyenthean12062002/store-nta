import React, { useContext, useEffect, useState } from "react";
// css pages
import "./productsPages.scss";
import { ProductsContext } from "../../component/products/ProductsContext";
//import products
import Product from "../../component/products/Product";
//import Chats
import Chats from "../../component/chatmess/Chats";
const Products = () => {
  const { products } = useContext(ProductsContext);
  const [values, setValue] = useState("");

  const Item = ({ children }) => {
    const itemNameCategory = document.querySelectorAll(".item");
    itemNameCategory.forEach((item) => {
      item.addEventListener("click", () => {
        itemNameCategory.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
    return (
      <div
        className="item my-[2px] w-full h-[42px] flex items-center justify-start cursor-pointer shadow-md p-[8px] hover:bg-[#FEBD68]"
        onClick={(e) => {
          setValue(e.target.innerText);
        }}
      >
        {children}
      </div>
    );
  };
  const LoadCategory = () => {
    const arr = [];
    products.filter((item) => {
      arr.push(item.category.name);
    });
    const newArr = [...new Set(arr)];
    return newArr.map((item, index) => {
      return <Item key={index}>{item}</Item>;
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%,80%] px-[24px] transition-all duration-200">
      <aside className="max-w-[90%] md:max-w-[80%] w-full h-full">
        <div className="w-[100%]">
          <div className="w-full  ">
            <h3 className="font-bold text-[1.3rem] mt-[22px] mb-[20px] md:text-[1.6rem]">
              CATEGORY
            </h3>
            <ul className="mt-[12px] text-[0.9rem] w-full ml-[10px] md:text-[1.1rem] md:ml-[22px]">
              {LoadCategory()}
            </ul>
          </div>
          <div className="mt-[12px]">
            <Chats />
          </div>
        </div>
      </aside>
      <div className="max-w-[100%] w-full scroll-smooth">
        <h4 className="text-center mt-[22px] select-none font-bold text-[1.6rem]">
          PRODUCTS
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] md:gap-[16px] mt-[20px] transtion-all duration-200 h-[100vh] overflow-y-auto scroll-smooth">
          {products
            .filter((product) => {
              if (product.category.name === values) {
                return product.category.name;
              } else if (values === "All" || values === "") {
                return product;
              }
            })
            .map((product, index) => {
              return <Product products={product} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
