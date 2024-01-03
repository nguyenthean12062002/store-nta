import React, { useContext } from "react";
// icon
import { MdAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";

import { Link } from "react-router-dom";
// import cartcontext
import { CartContext } from "../cart/CartContext";
import { toast } from "react-toastify";
const Product = ({ products }) => {
  const { id, title, images, price, category } = products;
  const { addProducts } = useContext(CartContext);
  // thông báo của giỏ hàng khi được thêm sản phẩm mới

  return (
    <div className="group w-full h-full relative">
      <Link
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        to={`/products/id/${id}`}
        className="w-full z-5 h-full cursor-pointer bg-white  border-[0.6px] hover:border-[1px] hover:border-[#EF4444] hover:border-[0.8px] hover:translate-y-[4px]  flex flex-col items-center justify-center p-[10px] transition-all duration-300   "
      >
        {/* image */}
        <div className="h-[120px] md:h-[160px] my-[8px]">
          <img
            alt="img_products"
            className="h-[100%] w-full object-cover  "
            src={images || products.images[0]}
          />
        </div>
        {/* add and view */}
        {/* title , price,  */}
        <div className="flex items-center flex-col justify-start">
          <h1 className="font-medium mb-[6px] md:mb-half  text-ellipsis overflow-hidden ...">
            <Link
              className="line-clamp-2 text-black capitalize"
              to={`/products/id/${id}`}
            >
              {title}
            </Link>
          </h1>
          <h4 className="text-gray-500 mb-[6px] md:mb-half">{category.name}</h4>
          <h3 className=" font-medium text-red underline italic mt-[2px] mb-[6px] md:mb-half">
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
