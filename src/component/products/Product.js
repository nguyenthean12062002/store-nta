import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

import { Link } from "react-router-dom";
// import cartcontext
import { CartContext } from "../cart/CartContext";
import { toast } from "react-toastify";
const Product = ({ products }) => {
  console.log(products);
  const { id, title, images, price, description, category, amount } = products;
  const { addProducts } = useContext(CartContext);
  // thông báo của giỏ hàng khi được thêm sản phẩm mới

  return (
    <div className="group w-full h-full relative">
      <Link
        to={`/products/${id}`}
        className="w-full z-5 h-full cursor-pointer bg-white rounded-[12px] border-[1px] hover:border-[1px] hover:border-[#EF4444]   flex flex-col items-center justify-center p-[10px] transition-all duration-300   "
      >
        {/* image */}
        <div className="h-[160px] my-[8px]">
          <img
            className="h-[100%] w-full object-cover rounded-xl "
            src={images || products.images[0]}
          />
        </div>
        {/* add and view */}
        {/* title , price,  */}
        <div className="flex items-center flex-col justify-start">
          <h1 className="font-medium my-half  text-ellipsis overflow-hidden ...">
            <Link
              className="line-clamp-2 text-black capitalize"
              to={`/products/${id}`}
            >
              {title}
            </Link>
          </h1>
          <h4 className="text-gray-500 mb-half">{category.name}</h4>
          <h3 className=" font-medium text-red underline italic mt-[2px] pb-half">
            $ {price}
          </h3>
        </div>
      </Link>
      <div className="z-20 flex absolute items-center justify-center bottom-[5%] left-[10%]   p-[4px] min-w-[60px] max-w-[100px] min-h-[45px] opacity-0 group-hover:opacity-100  transition-all duration-200 ">
        <button
          onClick={() => {
            addProducts(products, id);
          }}
          className="w-full h-full p-[3px] mr-[6px]  text-white bg-slate-600 flex items-center justify-center "
        >
          <MdAdd />
        </button>
        <div
          onClick={() => {
            toast.success("Added to favorites success");
          }}
          className="w-full h-full p-[3px] text-white bg-red flex items-center cursor-pointer justify-center"
        >
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default Product;
