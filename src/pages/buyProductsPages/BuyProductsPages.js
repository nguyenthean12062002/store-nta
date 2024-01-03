import React, { useEffect } from "react";
// header
// icon
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";

import Flex from "../../component/flex/Flex";
const BuyProductsPages = () => {
  console.log("reset");
  const handleReload = () => {
    // window.location.href = "/"; // Đặt lại pathname về trang chủ
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      handleReload();
    });
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);
  // Thực hiện scroll đến đầu trang khi component được render lại
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white w-full h-ful flex items-start justify-center flex-col px-full">
      {/* show products and info buyer */}
      <div className="text-[1rem] w-full h-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[60%,38%] gap-x-[24px] bg-bg my-half py-full px-half">
        {/* products want buy */}
        <div>
          {/* info products */}
          <div className="mt-half flex items-center justify-between">
            <h3 className=" text-[1.1rem]">Products</h3>
            {/* price and couts */}
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 mr-full">Unit price</h4>
              <h4 className="text-gray-400">Quantity</h4>
            </div>
          </div>
          {/* voucher */}
          <Flex justify="between" className="my-half">
            <h4 className="text-[1.1rem]">Voucher</h4>
          </Flex>
          {/* shping unit */}
          <Flex justify="between" className="mb-half">
            <h4>Shipping unit</h4>
            <h4>Extral</h4>
          </Flex>
          {/* price */}
          <Flex justify="between">
            <h4>Total:</h4>
            <h4>$</h4>
          </Flex>
        </div>
        {/* info buyer */}
        <div>
          <h3 className="text-main text-center text-[1.2rem] font-bold">
            Enter Shipping Information
          </h3>
          {/* address */}
          <div className="mt-half">
            <Flex justify="">
              <FaMapMarkerAlt className="text-red-500 mr-half text-red" />
              <h4 className=" text-[1rem] text-gray-500">Delivery address:</h4>
            </Flex>
            <input
              placeholder=""
              className="w-full h-[34px] border-[1px] px-half mt-[6px]"
            />
          </div>
          {/* full name */}
          <div className="mt-half">
            <Flex justify="">
              <MdDriveFileRenameOutline className="text-red-500 mr-half text-red" />
              <h4 className=" text-[1rem] text-gray-500">Full name:</h4>
            </Flex>
            <input
              placeholder=""
              className="w-full h-[34px] border-[1px] px-half mt-[6px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* number phone */}
            <div className="mt-half">
              <Flex justify="">
                <FaPhone className="text-red-500 mr-half text-red" />
                <h4 className=" text-[1rem] text-gray-500">Number phone:</h4>
              </Flex>
              <input
                placeholder=""
                className="w-full h-[34px] border-[1px] px-half mt-[6px]"
              />
            </div>
            {/* email */}
            <div className="mt-half">
              <Flex justify="">
                <FaVoicemail className="text-red-500 mr-half text-red" />
                <h4 className=" text-[1rem] text-gray-500">Email:</h4>
              </Flex>
              <input
                placeholder=""
                className="w-full h-[34px] border-[1px] px-half mt-[6px]"
              />
            </div>
          </div>
          {/* enough 18 years old */}
          <Flex justify="start" className="mt-half">
            <input id="input_check" type="checkbox" />
            <label
              for="input_check"
              className="ml-half text-[0.9rem] cursor-pointer"
            >
              I am 18 years old
            </label>
          </Flex>
        </div>
        {/* nhấn đặt hàng  */}
      </div>
      {/* button click order */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full max-w-[1200px] mb-full">
        <h6 className="text-gray-500 mb-half md:mb-0 flex items-center">
          Clicking <span className="text-main">"Order"</span> means you agree to
          abide by the NTA Terms
        </h6>
        <button className="bg-red h-[36px] text-white  hover:opacity-[0.7]">
          Order
        </button>
      </div>
      l
    </div>
  );
};

export default BuyProductsPages;
