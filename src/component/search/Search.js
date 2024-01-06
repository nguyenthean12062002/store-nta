import React, { useState, useContext } from "react";
import { GrSearch } from "react-icons/gr";
// import Modal
import Modal from "../modal/Modal";
// import products context
import { ProductsContext } from "../products/ProductsContext";
import OverLay from "../../layout/OverLay/OverLay";
import { Link } from "react-router-dom";
const Search = () => {
  const { products } = useContext(ProductsContext);
  // show modal kết quả của tìm kiếm
  const [show, setShow] = useState(true);
  // value của input search
  const [value, setValue] = useState(" ");
  const handleShowModal = () => {
    setShow(false);
  };
  const handleEventInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=" w-[100%] px-full h-[100%]  py-half  flex flex-col items-center z-[40] transition-all duration-300">
      {/* input search */}
      <form className="w-full relative xl:w-[60%] h-[36px] md:h-[40px] text-[0.9rem] flex items-center justify-between z-[41]">
        <div className="w-full flex-1 h-[40px] pr-[5px] flex items-center justify-center relative">
          <input
            id="input"
            value={value}
            className={`w-full min-w-full  h-[36px] bg-white text-gray-700 md:h-[40px] text-[0.96rem] md:text-[0.9rem] lg:text-[0.95rem] border-[ 0.7px] border-[#888]  px-[12px] `}
            placeholder="Search"
            onClick={handleShowModal}
            onChange={handleEventInput}
          />
        </div>
        <label
          for="input"
          className="w-[60px] absolute cursor-pointer  right-[5%] md:right-[0%] h-[36px] md:h-[40px] flex items-center justify-center  ]"
        >
          <GrSearch className="text-[1.2rem] font-bold text-main " />
        </label>
      </form>
      {/* modal show search */}
      <Modal
        isHidden={show}
        className="relative w-full bg-white max-w-[1200px] h-full shadow-xl z-[100] border-[#EF4444] border-[0.5px] "
        onClick={() => {}}
      >
        <div className="w-full h-[100%] h-full min-h-[300px]">
          <h4 className="py-[12px] px-half text-[1.1rem] text-red text-center">
            Result:
          </h4>
          {/* kết quả tìm kiếm các sản phẩm liên quan */}
          <ul className="min-h-[100px] max-h-[240px] overflow-y-scroll pl-full transition-all duration-300 border-[0.5px] py-[8px] ">
            {products
              .filter((item) => {
                //   logic tìm kiếm value input có trong title của sản phẩm hay không
                if (value === "" || value === " ") {
                  return [];
                } else {
                  if (item.title.toLowerCase().includes(value.toLowerCase())) {
                    return item.title;
                  }
                }
              })
              .map((item, index) => {
                return (
                  <Link
                    to={`/products/id/${item.id}`}
                    key={`key ${index}`}
                    className="py-[8px] text-gray-600 cursor-pointer transition-all duration-300 block hover:text-red tracking-wide hover:underline"
                  >
                    {item.title}
                  </Link>
                );
              })}
          </ul>
          {/* các tìm kiếm nhiều lượt nhất */}
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
          </div> */}
        </div>
      </Modal>
      {/* overlay */}
      <OverLay
        className=" bg-transparent"
        hidden={show}
        onClick={() => {
          setShow(true);
        }}
      />
    </div>
  );
};

export default Search;
