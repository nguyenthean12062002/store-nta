import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Flex from "../components/flex/Flex";
import { MdAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { CartContext } from "../cart/CartContext";
import { toast } from "react-toastify";
import { Loading } from "../components";
import { motion } from "framer-motion";
const Product = ({ data }) => {
  if (!data) {
    <Loading />;
  }
  const { id, title, images, price, category } = data;
  const randomPriceSale = useMemo(() => Math.floor(Math.random() * 200), []);
  const salesPrice = (
    ((randomPriceSale + price - price) / (price + randomPriceSale)) *
    100
  ).toFixed(0);
  const { addProducts } = useContext(CartContext);
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      className="group w-full h-full relative product__item  transition-all duration-300"
    >
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
        <div className="w-full h-[120px] md:h-[160px] my-lg ">
          <img
            alt="img_products"
            className="h-[100%] w-full object-cover   "
            src={images || data.images[0]}
          />
        </div>
        {/* title */}
        <h1 className="text-start w-[100%] h-[24px ] md:h-[30px]  whitespace-nowrap text-ellipsis overflow-hidden ">
          {title}
        </h1>
        {/* category */}
        <h4 className="text-gray-500 text-start w-[100%]">{category.name}</h4>
        {/* price */}
        <Flex justify="start" className="w-[100%] py-sm">
          <h4 className="text-red">${price}</h4>
          <h4 className="text-sub text-[0.75rem] line-through px-half">
            ${price + randomPriceSale}
          </h4>
          <h4 className="text-white bg-red text-[0.75rem]"> -{salesPrice}%</h4>
        </Flex>
        {/* sold */}
        <h5 className="text-[0.9rem] text-start w-[100%]">
          Sold: {randomPriceSale}
        </h5>
      </Link>
      <div className="z-20 flex absolute items-center justify-center bottom-[5%] right-[10%]   p-[4px] min-w-[60px] max-w-[100px] min-h-[45px] translate-x-[-50%] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0]  transition-all duration-200 ">
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
    </motion.div>
  );
};

export default Product;
