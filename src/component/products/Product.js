import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import cartcontext
import { CartContext } from "../cart/CartContext";
import { toast } from "react-toastify";
const Product = ({ products }) => {
  const { id, title, images, price, description, category, amount } = products;
  const { addProducts } = useContext(CartContext);
  // thông báo của giỏ hàng khi được thêm sản phẩm mới

  return (
    <div className="w-full h-[180px] md:h-[280px] group border flex flex-col items-center justify-center p-[10px] rounded-[12px] relative transition-all duration-300 hover:border-[2px] hover:border-[#999] ">
      {/* image */}
      <div className="h-[110px] my-[8px]">
        <img
          className="h-[100%] w-full object-cover"
          src={images || products.images[0]}
        />
      </div>
      {/* add and view */}
      <div className="flex flex-col absolute items-center justify-center top-[5px] right-[5px]  bg-red-200 p-[4px] min-w-[40px] min-h-[45px] opacity-0 group-hover:opacity-100  transition-all duration-200 ">
        <button
          onClick={() => {
            addProducts(products, id);
          }}
          className="w-full h-full p-[3px] mb-[3px] text-white bg-slate-600 flex items-center justify-center "
        >
          <MdAdd />
        </button>
        <Link className="w-full h-full p-[3px] text-white bg-red-500 flex items-center justify-center">
          <BsFillEyeFill />
        </Link>
      </div>
      {/* title , price,  */}
      <div className="flex items-center flex-col justify-start">
        <h1 className="font-medium mb-[4px] text-ellipsis overflow-hidden ...">
          <Link className="line-clamp-2" to={`/products/${id}`}>
            {title}
          </Link>
        </h1>
        <h4 className="text-gray-500">{category.name}</h4>
        <h3 className="font-medium text-[#FEBD68] underline italic mt-[2px]">
          $ {price}
        </h3>
      </div>
    </div>
  );
};

export default Product;
