import React, { useEffect, useState } from "react";
// header
import Header from "../../layout/Header/Header";
import { FaMapMarkerAlt } from "react-icons/fa";
import Flex from "../../component/flex/Flex";
import Modal from "../../component/modal/Modal";
import OverLay from "../../layout/OverLay/OverLay";
const BuyProductsPages = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0); // Thực hiện scroll đến đầu trang khi component được render lại
  }, []);

  // hanlde mở đóng các modal
  const [modalAddress, setShowModalAddress] = useState(true);
  const [modallShip, setModalShip] = useState(true);
  // Item con của modal thêm sửa
  const ItemEditModal = ({ label }) => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-start mb-half">
        <label
          htmlFor="name"
          className=" w-full md:w-[30%] block  mb-half md:inline-block text-gray-500"
        >
          {label}
        </label>
        <input
          id="name"
          placeholder="...aaa"
          className="border-[0.5px] border-[#ef4444] px-[3px] text-[0.85rem] h-[28px] min-w-[140px] w-full"
        />
      </div>
    );
  };
  return (
    <div className="bg-bg w-full h-full flex items-center justify-center">
      <div className="text-[1rem] w-full max-w-[1200px] bg-white my-full py-full px-half">
        {/* chọn người nhận hàng và thêm mới nếu muốn */}
        <div className="px-full py-half">
          <Flex justify="">
            <FaMapMarkerAlt className="text-red-500" />
            <h4 className="text-main font-bold text-[1.1rem]">
              Delivery Address
            </h4>
          </Flex>
          {/* show address */}
          <div className="flex items-center justify-between mt-half border-b-[0.5px] border-[#999] pb-[12px]">
            <div>
              <span className="font-bold"></span>
              <span className="font-bold ml-half"></span>
            </div>
            {/* address */}
            <div className="text-gray-500 ml-half "></div>
            <div
              className="text-main cursor-pointer"
              onClick={() => {
                setShowModalAddress(false);
              }}
            >
              Changes
            </div>
          </div>
          {/* show products want buy */}
          <div className="mt-half flex items-center justify-between">
            <h3 className=" font-bold text-[1.1rem]">Products</h3>
            {/* price and couts */}
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 mr-full">Unit price</h4>
              <h4 className="text-gray-400">Quantity</h4>
            </div>
          </div>
          <div>
            <h3 className="py-half">Category</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <img alt="img prodcuts" />
                <p className="ml-full text-gray-500 text-[0.9rem]">
                  Description prodcuts
                </p>
              </div>
              <div className="flex items-center justify-between w-[140px]">
                <h5 className="text-main underline italic">$</h5>
                <h5 className="pr-full"></h5>
              </div>
            </div>
          </div>
          {/* choose ship */}
          <div className="border-t-1 w-fulll grid grid-cols-1  mt-full border-t-[0.5px] border-[#999] pt-half">
            <div className="flex items-start justify-start flex-col">
              <div className="w-full flex items-start justify-between">
                <h4 className="text-[1.05rem] text-main select-none">
                  Shipping Unit
                </h4>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold mb-[2px]">Faster</h3>
                    <p className="text-gray-400 italic underline">
                      Receive goods on ...
                    </p>
                  </div>
                  <div
                    className="text-main cursor-pointer"
                    onClick={() => {
                      setModalShip(false);
                    }}
                  >
                    Changes
                  </div>
                </div>
              </div>
              <h4 className="text-[0.9rem]"></h4>
            </div>
          </div>
          {/* choose vouche */}
          <div className="mt-full">
            <h4 className="text-[1.1rem] font-bold">Voucher</h4>
          </div>
          {/* phương thức thanh toán */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-full">
            <h3 className="w-[70%] text-main text-[1.1rem] font-bold mb-half md:mb-0">
              Payment Method
            </h3>
            <div className=" flex items-center justify-between">
              <h3 className="text-gray-500">Payment on delivery</h3>
              <h4 className="text-main cursor-pointer">Changes</h4>
            </div>
          </div>
          {/* show tiền các thể loại phải trả */}
          <div className="w-full flex  items-center justify-end">
            <div>
              <h3 className="mt-half text-gray-500">Total cost of goods:...</h3>
              <h3 className="mt-half text-gray-500">Transport fee:..</h3>
              <h3 className="mt-half text-gray-500">Total payment:...</h3>
            </div>
          </div>
          {/* nhấn đặt hàng  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 mt-full h-full">
            <h6 className="text-gray-500 mb-half md:mb-0">
              Clicking <span className="text-main">"Order"</span> means you
              agree to abide by the NTA Terms
            </h6>
            <button className="bg-red h-[36px] text-white rounded-2xl  hover:opacity-[0.7]">
              Order
            </button>
          </div>
        </div>
      </div>
      {/* modal name, address */}
      <Modal
        isHidden={modalAddress}
        className="w-[89%] xl:w-[50%] h-[48%] top-[15%] lg:top-[10%]"
        title="Add  info/address"
      >
        {/* tên */}
        <ItemEditModal label="Full Name" />
        {/* số điện thoại */}
        <ItemEditModal label="Number Phone" />
        {/* Địa chỉ */}
        <ItemEditModal label="Address" />
        {/* button action */}
        <div className="flex items-center justify-between mt-[36px] h-[32px]">
          <buton
            className=" py-[8px] px-[6px] bg-main flex item-center justify-center text-gray-500 cursor-pointer"
            onClick={() => {
              setShowModalAddress(true);
            }}
          >
            Cancel
          </buton>
          <div>
            <buton className="py-[8px] px-[6px] bg-bg mr-half cursor-pointer">
              Edit
            </buton>
            <buton className="py-[8px] px-[6px] bg-red text-white cursor-pointer">
              Completed
            </buton>
          </div>
        </div>
      </Modal>
      <OverLay
        hidden={modalAddress}
        onClick={() => {
          console.log(1);
          setShowModalAddress(true);
        }}
      />
      {/* modal ship */}
      <Modal
        isHidden={modallShip}
        className="w-[89%] xl:w-[50%] h-[48%] top-[15%] lg:top-[10%]"
        title="Change Ship"
      >
        {/* details */}
        <div className="mt-full text-gray-500 text-[0.9rem]">
          Shipping times vary between units. Please choose the appropriate
          shipping method
        </div>
        {/* show */}
        <div className="mt-half text-gray-800">
          <h5 className="py-[3px] ml-half text-[1rem]">Fast : 2 - 3 days</h5>
          <h5 className="py-[3px] ml-half text-[1rem]">
            Express : 1-4 hour ( in the inner city area )
          </h5>
          <h5 className="py-[3px] ml-half text-[1rem]">Save : 3 - 5 days</h5>
        </div>
        <Flex justify="start" className="mt-half">
          <h5 className="mr-half text-[1rem] ">Choose the shipping unit</h5>
          <select className="text-red border-[0.5px]">
            <option>Express</option>
            <option>Save</option>
            <option>Normal</option>
          </select>
        </Flex>
        {/* button action */}
        <div className="flex items-center justify-between mt-[36px] h-[32px]">
          <buton
            className=" py-[8px] px-[6px] bg-main flex item-center justify-center text-gray-500 cursor-pointer"
            onClick={() => {
              setModalShip(true);
            }}
          >
            Cancel
          </buton>
          <div>
            <buton className="py-[8px] px-[6px] bg-bg mr-half cursor-pointer">
              Edit
            </buton>
            <buton className="py-[8px] px-[6px] bg-red text-white cursor-pointer">
              Completed
            </buton>
          </div>
        </div>
      </Modal>
      <OverLay
        hidden={modallShip}
        onClick={() => {
          console.log(1);
          setModalShip(true);
        }}
      />
    </div>
  );
};

export default BuyProductsPages;
