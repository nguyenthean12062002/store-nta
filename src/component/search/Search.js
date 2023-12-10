import React, { useState, useContext, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
// import Modal
import Modal from "../modal/Modal";
// import products context

import { ProductsContext } from "../products/ProductsContext";
// sidebar context
import { SidebarContext } from "../sidebar/SidebarContext";
const Search = () => {
  const { products } = useContext(ProductsContext);
  const { isOpen } = useContext(SidebarContext);
  const [show, setShow] = useState(true);
  const handleShowModal = () => {
    setShow(!show);
  };
  const [value, setValue] = useState("");
  const handleEventInput = (e) => {
    setValue(e.target.value);
  };
  const { title, price } = products;
  const handleShowProductsSearch = () => {
    products
      .filter((item) => {
        //   logic tìm kiếm value input có trong title của sản phẩm hay không
        if (item.title.includes(value)) {
          return item.title;
        } else {
        }
      })
      .map((item, index) => {
        return <div key={index}>{item.title}</div>;
      });
  };
  useEffect(() => {
    handleShowProductsSearch();
  }, [value]);
  return (
    <div className="w-[100%] px-full md:w-[60%] bg-white relative  flex flex-col items-center z-[9]  ">
      <div className="my-[4px] md:my-full mb-[14px]">
        <h5 className="text-gray-500 text-[1rem] md:text-[1.2rem] select-none text-center">
          Explore our store with a wide variety of products and merchandise
        </h5>
      </div>
      {/* input search */}
      <form className="w-full h-[36px] md:h-[40px] text-[0.9rem] flex items-center justify-between z-[41">
        <div className="w-full flex-1 h-[40px] pr-[5px] flex items-center justify-center relative">
          <input
            className="w-full min-w-full h-[36px] md:h-[40px] text-[0.96rem] md:text-[0.9rem] lg:text-[0.95rem] border-[1px] border-[#FEBD68] focus:outline-[#999] px-[12px] active:outline-[#999]"
            placeholder="Search NTA"
            onClick={handleShowModal}
            onChange={handleEventInput}
          />
        </div>
        <button className="w-[60px] h-[36px] md:h-[40px] flex items-center justify-center bg-[#FEBD68]">
          <GrSearch className="" />
        </button>
      </form>
      {/* modal show search */}
      {/* <Modal isHidden={show} onClick={() => {}}>
        <div className="bg-white shadow-lg absolute bottom-[-300%] left-0 right-0 w-[200%] md:w-full h-full min-h-[300px]">
          <h4 className="py-[12px] px-[12px] text-[1.1rem] text-gray-500 text-center">
            Result:
          </h4>
          {/*list products suggestions */}
      {/* <div className="w-full">
        <h3 className="text-start text-[1.1rem] my-full text-red-500 font-bold w-full select-none  pl-[6px] ">
          Trending search:
        </h3>
        <ul className=" mb-full text-gray-500 transition-all duration-200 border-[0.5px] border-[#999]">
          {products.map((product, index) => {
            if (index <= 4) {
              return (
                <li
                  className="pl-full py-[3px] hover:bg-slate-100 cursor-pointer"
                  key={index}
                >
                  {product.title}
                </li>
              );
            }
          })}
        </ul>
      </div> 
          <div className="mt-[20px]">{handleShowProductsSearch()}</div>
        </div>
      </Modal> */}
      {/* overlay */}
    </div>
  );
};

export default Search;
