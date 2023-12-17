import React, { useContext, useEffect, useState } from "react";
// css pages
import "./productsPages.scss";
import { ProductsContext } from "../../component/products/ProductsContext";
//import products
import Product from "../../component/products/Product";
//import Chats
import Chats from "../../component/chatmess/Chats";
import Flex from "../../component/flex/Flex";
// icon
import { FaAngleDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

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
        className="item my-[2px] w-full text-gray-500 hover:text-black h-[42px] flex items-center justify-start cursor-pointer  p-[8px] "
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
  const ChildrenFilter = ({ title, select1, select2, select3 }) => {
    return (
      <div className="w-full h-full py-full border-b-[0.5px] border-[#EF4444]">
        <h4 className="text-[0.95rem] my-half mb-full capitalize  ml-half ">
          {title}
        </h4>
        {/* show các danh mục chọn lựa */}
        <div className="my-half pl-full text-gray-500 text-[0.9rem]">
          <Flex justify="start" className="my-[6px]">
            <input type="checkbox" className="mr-half" />
            <h5>{select1}</h5>
          </Flex>
          <Flex justify="start" className="my-[6px]">
            <input type="checkbox" className="mr-half" />
            <h5>{select2}</h5>
          </Flex>
          {select3 ? (
            <>
              <Flex justify="start" className="my-[6px]">
                <input type="checkbox" className="mr-half" />
                <h5>{select3}</h5>
              </Flex>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#F5F5F5] w-full flex items-center justify-center">
      <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-[20%,80%] px-[24px] transition-all duration-200  pb-full">
        {/* thanh bên */}
        <aside className="max-w-[90%]  md:max-w-[80%] w-full  mt-full ">
          <div className="w-[100%]">
            {/* list các tên danh mục mặt hàng */}
            <div className="w-full   ">
              <Flex className="font-bold text-[1rem] mt-[22px] mb-[20px] md:text-[1.2rem]">
                <CiCircleList className="font-bold mr-half text-red text-[1.5rem]" />
                <h4>Category</h4>
              </Flex>
              <ul className="mt-[12px] text-[0.9rem] w-full ml-[10px] md:text-[1.1rem] md:ml-[22px]">
                {LoadCategory()}
              </ul>
            </div>
            {/* bộ lọc tìm kiếm */}
            <div className="max-w-[90%] md:max-w-[80%]">
              <Flex
                justify="start"
                className="font-bold text-[1rem] mt-[22px]  md:text-[1.2rem]"
              >
                <CiFilter className="text-[1.5rem] text-red" />
                <span>Search fillter</span>
              </Flex>
              <ChildrenFilter
                title="place of sale"
                select1="Viet Nam"
                select2="Foreign"
              />
              <ChildrenFilter
                title="shipping unit"
                select1="Express"
                select2="Save money"
                select3="Fast"
              />
              <ChildrenFilter
                title="shop type"
                select1="Mall"
                select2="Favourite"
              />
            </div>
            <div className="mt-[12px]">
              <Chats />
            </div>
          </div>
        </aside>
        {/* show products */}
        <div className="max-w-[100%] w-full scroll-smooth mt-full">
          {/* show sorted by */}
          <Flex justify="between" className="w-full my-half  h-[40px]">
            <Flex justify="start" className=" overflow-x-auto ">
              <div className="w-full min-w-[100px]">
                <span className="text-gray-500">Sorted by:</span>
              </div>
              <button className="p-half mx-[6px] rounded-[2px] cursor-pointer  bg-red text-white  hover:opacity-80">
                Popular
              </button>
              <button className="p-half mx-[6px] rounded-[2px] cursor-pointer  bg-white hover:text-gray-500">
                Latest
              </button>
              <button className="p-half mx-[6px] rounded-[2px] cursor-pointer  bg-white hover:text-gray-500">
                Selling
              </button>
              {/* sap xep theo gia */}

              <Flex
                className="bg-white min-w-[190px] w-full h-full mx-[6px]  p-[8.2px] rounded-[2px] "
                justify="between"
              >
                <h4 className="select-none text-gray-600">Price</h4>
                {/* tang hoac giam */}
                <Flex justify="start">
                  <div className="text-red hover:text-main transition-all cursor-pointer duration-300 p-[4px]">
                    <FaArrowDown className="" />
                  </div>
                  <div className="text-red  hover:text-main transition-all cursor-pointer duration-300 p-[4px]">
                    <FaArrowUp />
                  </div>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <div className="w-full h-[full] mt-[20px]  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px]   transtion-all duration-500  overflow-y-auto scroll-smooth">
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
    </div>
  );
};

export default Products;
