import React, { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { GrFormNextLink } from "react-icons/gr";
import { IoTrashBinOutline } from "react-icons/io5";
// import Cart Context
import { CartContext } from "../cart/CartContext";
// import CartItem
import CartItem from "../cart/CartItem";
const Sidebar = () => {
  const { cart, totalCart, removeAllProducts, cout } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "right-[-100%]"
      } container absolute top-[60px] right-0   min-h-[800px]   sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[30%] bg-slate-200 transition-all duration-300  px-[10px]`}
    >
      {/* title */}
      <div className="flex items-center justify-between pt-[10px]">
        <div className="font-bold text-[16px]">Shop Bag({cout})</div>
        {/* icon close */}
        <div
          onMouseDown={handleClose}
          className="cursor-pointer mr-[10px] p-[4px] hover:text-red-300 text-[1.3rem]"
        >
          <GrFormNextLink className="transition-all duration-200 font-bold text-[2rem] bg-red-500 rounded-full hover:bg-white" />
        </div>
      </div>
      {/* cart */}
      <h3 className="text-center my-[10px] text-[1.4rem] font-semibold">
        LIST PRODUCTS ADDED
      </h3>
      <div className="mt-[20px]">
        {cart.map((products) => {
          return <CartItem key={products.id} products={products} />;
        })}
      </div>
      {/* total and remove all products in cart */}
      <div className="flex items-center justify-between mt-[10px] py-[10px] h-50px mb-[10px]">
        <div className="bg-gray-400 text-white p-[4px]  flex items-center justify-center h-full transition-all duration-150">
          <span className="font-bold text-black">TOTAL</span>: $ {totalCart}
        </div>
        <div
          onClick={removeAllProducts}
          className="bg-red-500 text-white hover:bg-black transition-all duration-150 p-[4px] cursor-pointer text-[1rem] h-full flex items-center justify-between"
        >
          <IoTrashBinOutline />
          <div className="text-[13px] ml-[4px] ">({cout})</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
