import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Flex from "../../component/flex/Flex";
const BuyProductsPages = () => {
  return (
    <div>
      <div className="text-[1rem]">
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
              <span className="font-bold">An nè</span>
              <span className="font-bold ml-half">0961563714</span>
            </div>
            {/* address */}
            <div className="text-gray-500 ml-half ">
              783 Tam Trinh , phường Yên Sở, quận Hoàng Mai, Hà Nội
            </div>
            <div className="text-main cursor-pointer">Changes Address</div>
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
                  Description prodcuts{" "}
                </p>
              </div>
              <div className="flex items-center justify-between w-[140px]">
                <h5 className="text-main underline italic">$99.00</h5>
                <h5 className="pr-full">3</h5>
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
                  <div className="text-main cursor-pointer">Changes</div>
                </div>
              </div>
              <h4 className="text-[0.9rem]">Jointly Checked</h4>
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
          {/* show tieefnf các thể loại phải trả */}
          <div className="w-full flex  items-center justify-end">
            <div>
              <h3 className="mt-half text-gray-500">Total cost of goods:...</h3>
              <h3 className="mt-half text-gray-500">Transport fee:..</h3>
              <h3 className="mt-half text-gray-500">Total payment:...</h3>
            </div>
          </div>
          {/* nhấn đặt hàng  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 mt-full">
            <h6 className="text-gray-500 mb-half md:mb-0">
              Clicking "Order" means you agree to abide by the NTA Terms
            </h6>
            <button className="bg-main h-[30px] text-white rounded-[4px] hover:opacity-[0.7]">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProductsPages;
