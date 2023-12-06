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
    <div className="w-full bg-white h-[30px] md:h-[40px] flex items-center ">
      <form className="w-full text-[0.9rem] flex items-center justify-between">
        <div className="w-full flex-1 h-[40px] px-[5px] flex items-center justify-center relative">
          <input
            className="w-full min-w-full h-[30px] md:h-[40px] text-[0.8rem] md:text-[0.95rem] border-[1px] border-[#FEBD68] focus:outline-[#999] px-[12px] active:outline-[#999]"
            placeholder="Search NTA"
            onClick={handleShowModal}
            onChange={handleEventInput}
          />
          <Modal
            isHidden={show}
            onClick={() => {
              console.log("modal");
            }}
          >
            <div className="bg-white shadow-lg absolute top-[45px] left-0 right-0 w-[200%] md:w-full h-full min-h-[300px]">
              <h4 className="py-[12px] px-[12px] text-[1.1rem] text-gray-500 text-center">
                Sugesstions:
              </h4>
              {/*list products suggestions */}
              <div className="mt-[20px]">{handleShowProductsSearch()}</div>
            </div>
          </Modal>
        </div>
        <button className="w-[60px] h-[30px] md:h-[40px] flex items-center justify-center bg-[#FEBD68]">
          <GrSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
