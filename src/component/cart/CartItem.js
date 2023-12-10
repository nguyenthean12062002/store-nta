import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

//import Cartcontext
import { CartContext } from "./CartContext";
const CartItem = ({ products }) => {
  const { removeProduct, increaseAmout, decreaseAmout } =
    useContext(CartContext);
  // destructuring
  const { id, title, images, price, description, category, amout } = products;
  return (
    <div className="flex items-center justify-between px-[14px] w-full h-full bg-white p-[12px] my-[12px] transtion-all duration-300 border-b-[1px] ">
      {/* img */}
      <div className="w-[20%] mr-[8px] h-[60px] md:h-[80px] lg:h-[90px] object-cover flex items-center justify-center">
        <img className="h-full object-cover w-[40%]" src={images} />
      </div>
      {/* actions */}
      <div className="w-[75%] md:w-[78%] lg:w-[80%]">
        {/* title and icon remove item */}
        <div className="grid grid-cols-3 ">
          <div className="w-full  mr-[10px] text-black font-medium line-clamp-1 text-[0.9rem]">
            <Link to={`/products/${id}`} className="text-[1.05rem] capitalize">
              {title}
            </Link>
          </div>
          {/* des */}
          <div className="w-[100%] ">
            <p className="text-gray-500 line-clamp-3 ">{description}</p>
          </div>
          {/* remove products */}
          <div
            onClick={() => {
              removeProduct(id);
            }}
            className="w-full text-[1.4rem] lg:text-[1.5rem] cursor-pointer text-red-500 hover:text-red-300 transition-all duration-200"
          >
            <BsTrash />
          </div>
        </div>
        {/* add, total , price */}
        <div>
          {/* add remove amout */}
          <div className="flex items-center justify-between w-[80px] mt-[6px] text-gray-500">
            <div
              onClick={() => {
                decreaseAmout(products, id);
              }}
              className="w-[20px] h-[20px] bg-gray-200 flex items-center justify-center cursor-pointer "
            >
              <IoIosRemove />
            </div>
            <div className="text-[0.9rem] font-medium select-none">{amout}</div>
            <div
              onClick={() => {
                increaseAmout(products, id);
              }}
              className="w-[20px] h-[20px] bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
          {/* price and result price */}
          <div className="flex items-center justify-between text-[0.8rem] mt-[10px] select-none">
            <div className="font-medium underline text-main italic text-[0.9rem]">
              $ {price}
            </div>
            {/* result price */}
            <div className="text-red-500 font-medium">
              $:{parseInt(price * amout).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
