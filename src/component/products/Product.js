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
    <div className="group">
      <Link
        to={`/products/${id}`}
        className="w-full z-5 h-[180px] md:h-[280px]  border flex flex-col items-center justify-center p-[10px] rounded-[12px] relative transition-all duration-300 hover:border-[2px] hover:border-[#999] "
      >
        {/* image */}
        <div className="h-[110px] my-[8px]">
          <img
            className="h-[100%] w-full object-cover"
            src={images || products.images[0]}
          />
        </div>
        {/* add and view */}
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
      </Link>
      <div className="z-20 flex flex-col relative items-center justify-center top-[-80%] right-[-5%]  bg-red-200 p-[4px] min-w-[40px] max-w-[40px] min-h-[45px] opacity-0 group-hover:opacity-100  transition-all duration-200 ">
        <button
          onClick={() => {
            addProducts(products, id);
          }}
          className="w-full h-full p-[3px] mb-[3px] text-white bg-slate-600 flex items-center justify-center "
        >
          <MdAdd />
        </button>
        <Link
          to={`/products/${id}`}
          className="w-full h-full p-[3px] text-white bg-red-500 flex items-center justify-center"
        >
          <BsFillEyeFill />
        </Link>
      </div>
    </div>
  );
};

export default Product;
