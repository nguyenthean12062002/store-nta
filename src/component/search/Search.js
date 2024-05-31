import React, { useState, useContext } from "react";
import { GrSearch } from "react-icons/gr";
import Modal from "../components/modal/Modal";
import { ProductsContext } from "../products/ProductsContext";
import OverLay from "../../layout/OverLay/OverLay";
import { Link } from "react-router-dom";

const Search = () => {
  const { products } = useContext(ProductsContext);
  const [show, setShow] = useState(false); // Modal bắt đầu ẩn
  const [value, setValue] = useState("");

  const handleShowModal = () => {
    setShow(true);
  };

  const handleHideModal = () => {
    setShow(false);
  };

  const handleEventInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-[100%] px-full h-[100%] py-half flex flex-col items-center z-[40] transition-all duration-300">
      {/* input search */}
      <form className="w-full relative xl:w-[60%] h-[36px] md:h-[40px] text-[0.9rem] flex items-center justify-between z-[41]">
        <div className="w-full flex-1 h-[40px] pr-[5px] flex items-center justify-center relative">
          <input
            id="input"
            value={value}
            autoComplete="false"
            className="w-full min-w-full h-[36px] bg-white text-gray-700 md:h-[40px] text-[0.96rem] md:text-[0.9rem] lg:text-[0.95rem] border-[0.7px] border-[#888] px-[12px]"
            placeholder="Search"
            onFocus={handleShowModal} // Hiển thị Modal khi focus vào input
            onChange={handleEventInput}
          />
        </div>
        <label
          htmlFor="input"
          className="w-[60px] absolute cursor-pointer right-[5%] md:right-[0%] h-[36px] md:h-[40px] flex items-center justify-center"
        >
          <GrSearch className="text-[1.2rem] font-bold text-main" />
        </label>
      </form>

      {/* modal show search */}
      <Modal
        isHidden={!show}
        className={`relative w-full bg-white max-w-[1200px] transition-all duration-300 h-full shadow-xl z-[100] border-[#EF4444] border-[0.5px] ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[100%]"
        }`}
        onClick={() => {}}
      >
        <div className="w-full h-[100%] h-full min-h-[300px]">
          <h4 className="py-[12px] px-half text-[1.1rem] text-red text-center">
            Result:
          </h4>
          <ul className="min-h-[100px] max-h-[240px] overflow-y-scroll pl-full transition-all duration-300 border-[0.5px] py-[8px] ">
            {products
              .filter((item) => {
                if (value.trim() === "") {
                  return [];
                }
                return item.title.toLowerCase().includes(value.toLowerCase());
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
        </div>
      </Modal>

      {/* overlay */}
      <OverLay
        className="bg-transparent"
        hidden={!show}
        onClick={handleHideModal}
      />
    </div>
  );
};

export default Search;
