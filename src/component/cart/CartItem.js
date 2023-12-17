import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Flex from "../flex/Flex";
//import Cartcontext
import { CartContext } from "./CartContext";
const CartItem = ({ products }) => {
  const { removeProduct, increaseAmout, decreaseAmout } =
    useContext(CartContext);
  // destructuring
  const { id, title, images, price, description, category, amout } = products;
  return (
    <div className="flex items-center justify-between  w-full h-full bg-white hover:border-[#ef4444] border-[0.5px] p-half my-half transtion-all duration-300 border-b-[1px] ">
      {/* img */}
      <div className="w-[20%] mr-[8px] h-[60px] md:h-[80px] lg:h-[90px] object-cover flex items-center justify-center">
        <img className="h-full object-cover w-[40%]" src={images} />
      </div>
      {/* actions */}
      <div className="w-[75%] md:w-[78%] lg:w-[80%] h-full">
        {/* title and icon remove item */}
        <div className="grid grid-cols-3 ">
          {/* name product , add , remove ,price */}
          <div className="w-full  mr-[10px] ">
            <Link
              to={`/products/${id}`}
              className=" mb-half capitalize font-medium line-clamp-1 text-black text-[1rem] "
            >
              {title}
            </Link>
            {/* add remove amout */}
            <div className="flex items-center justify-between w-[80px] mb-half text-gray-500">
              <div
                onClick={() => {
                  decreaseAmout(products, id);
                }}
                className="w-[20px] h-[20px] bg-gray-200 flex items-center justify-center cursor-pointer "
              >
                <IoIosRemove />
              </div>
              <div className="text-[0.9rem] font-medium select-none">
                {amout}
              </div>
              <div
                onClick={() => {
                  increaseAmout(products, id);
                }}
                className="w-[20px] h-[20px] bg-gray-200 flex items-center justify-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* price */}
            <div className="font-medium underline text-main italic text-[0.9rem] ">
              $ {price}
            </div>
          </div>
          {/* des */}
          <Flex justify="center" className="">
            <p className="text-gray-500 line-clamp-3 leading-5 tracking-wide text-[0.9rem]  ">
              {description}
            </p>
          </Flex>
          {/* remove and result price */}
          <div className="w-full h-full">
            {/* remove products */}
            <div
              onClick={() => {
                removeProduct(id);
              }}
              className="w-full flex items-start justify-end text-[1.4rem] lg:text-[1.5rem] cursor-pointer text-red-500 hover:text-red-300 transition-all duration-200"
            >
              <BsTrash />
            </div>
            {/* result price */}
            <div className="text-red-500 font-medium flex items-end justify-end mt-half">
              $:{parseInt(price * amout).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
