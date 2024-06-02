import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MdAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { CartContext } from "../cart/CartContext";
import { toast } from "react-toastify";
import { Loading } from "../components";
const Product = ({ data }) => {
  if (!data) {
    <Loading />;
  }
  const { id, title, images, price, category } = data;
  const { addProducts } = useContext(CartContext);
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
        className="w-full z-5 h-full overflow-hidden  cursor-pointer bg-white  border-[0.6px] hover:border-[1px] hover:border-[#EF4444] hover:border-[0.8px]  flex flex-col items-center justify-start p-[10px] transition-all duration-300   "
      >
        {/* img */}
        <div className="w-full h-[120px] md:h-[160px] my-[8px] ">
          <img
            alt="img_products"
            className="h-[100%] w-full object-cover   "
            src={images || data.images[0]}
          />
        </div>
        {/* title */}
        <div className="w-full h-full px-half flex items-center flex-col justify-start whitespace-nowrap text-ellipsis overflow-hidden">
          <h1 className="text-ellipsis mb-[6px] w-[90%] h-[24px ] md:h-[30px] md:mb-half whitespace-nowrap text-ellipsis overflow-hidden ">
            {title}
          </h1>
          <h4 className="text-gray-500 mb-[6px] md:mb-half">{category.name}</h4>
          <h3 className=" font-medium text-red underline italic mt-[2px] mb-[6px] md:mb-half">
            $ {price}
          </h3>
        </div>
      </Link>
      <div className="z-20 flex absolute items-center justify-center bottom-[5%] left-[10%]   p-[4px] min-w-[60px] max-w-[100px] min-h-[45px] translate-x-[-50%] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0]  transition-all duration-200 ">
        <button
          onClick={() => {
            addProducts(data, id);
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
