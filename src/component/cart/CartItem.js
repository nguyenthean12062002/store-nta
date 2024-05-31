import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Flex from "../components/flex/Flex";
//import Cartcontext
import { CartContext } from "./CartContext";
const CartItem = ({ products }) => {
  const { removeProduct, increaseAmout, decreaseAmout } =
    useContext(CartContext);
  // destructuring
  const { id, title, images, price, description, amout } = products;
  const [check, setCheck] = useState(false);
  return (
    <div className="w-full flex items-center justify-center bg-bg transition-all duration-500 my-half px-half border-[0.5px] border-transparent hover:border-[#EF4444] hover:border-[0.5px] ">
      {/* checkbox */}
      <input
        onClick={(e) => {
          setCheck(e.target.checked);
        }}
        checked={check}
        type="checkbox"
        className="w-[20px] h-[20px] mr-[10px] md:mr-full "
        id="checBoxCartPages"
      />
      <div
        className={`flex items-center justify-between  w-full h-full border-transparent p-half my-half transtion-all duration-300 border-b-[1px] ${
          check === true ? "border-[#ef4444]" : ""
        }`}
      >
        {/* img */}
        <div className="w-[20%] mr-[8px] h-[60px] md:h-[80px] lg:h-[90px] object-cover flex items-center justify-center">
          <img alt="img" className="h-full object-cover w-[40%]" src={images} />
        </div>
        {/* actions */}
        <div className="w-[75%] md:w-[88%] lg:w-[80%] h-full">
          {/* title and icon remove item */}
          <div className="grid grid-cols-[40%,30%,20%]  ">
            {/* name product , add , remove ,price */}
            <div className="w-full mr-[10px]">
              <Link
                to={`/products/id/${id}`}
                className=" mb-half capitalize font-medium line-clamp-1 text-black text-[1rem] "
              >
                {title}
              </Link>
              {/* add remove amout */}
              <div className="flex items-center justify-between w-[50px] md:w-[80px] mb-half text-gray-500">
                <div
                  onClick={() => {
                    decreaseAmout(id);
                  }}
                  className="w-[25px] h-[25px] bg-gray-200 flex items-center justify-center cursor-pointer "
                >
                  <IoIosRemove />
                </div>
                <div className="text-[0.9rem] font-medium select-none mx-[4px]">
                  {amout}
                </div>
                <div
                  onClick={() => {
                    increaseAmout(id);
                  }}
                  className="w-[25px] h-[25px] bg-gray-200 flex items-center justify-center cursor-pointer"
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
            <Flex justify="center" className="bg-blue">
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
                className="w-full flex items-start justify-end text-[1.2rem] lg:text-[1.5rem] cursor-pointer text-red transition-all duration-200 hover:opacity-[0.5]"
              >
                <BsTrash />
              </div>
              {/* result price */}
              <div className="text-main  font-medium flex items-end justify-end mt-half">
                <span className="text-[0.9rem] md:text-[1rem[">
                  $:{parseInt(price * amout).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
