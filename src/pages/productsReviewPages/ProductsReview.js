import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//cart context
import { CartContext } from "../../component/cart/CartContext";
//product context
import { MainContext } from "../../component/products/ProductsContext";

import { BiArrowBack } from "react-icons/bi";
const ProductsReview = () => {
  const navigate = useNavigate();
  const { addProducts } = useContext(CartContext);
  const { id } = useParams();
  const { products } = useContext(MainContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-[20px] font-semibold transition-all ">
        Loading...
      </div>
    );
  }
  const { title, image, price, description, category, amount } = product;

  return (
    <div className="w-full h-[400px]  px-[10%] py-[50px] flex flex-col md:flex-row items-center justify-between">
      <div className=" h-[70%] md:h-[90%] lg:h-[100%] w-[70%] flex items-center justify-center">
        <img src={image} alt="" className="h-full" />
      </div>
      <div className="h-full flex items-center justify-center p-[20px]">
        <div>
          <h4 className="py-[10px] text-black font-extrabold text-[1.5rem] ">
            {title}
          </h4>
          <p className="text-gray-400 my-[10px]">{description}</p>
          <h2 className="font-bold text-[1.8rem]">$ {price}</h2>
          <div className="flex items-center justify-between h-[32px] md:h-[40px]">
            <button
              className="border p-[4px] text-white bg-red-500 h-full "
              onClick={() => {
                addProducts(product, id);
              }}
            >
              Add cart
            </button>
            <button
              className="h-full bg-gray-500 text-white px-[10px] flex items-center justify-between"
              onClick={() => {
                navigate("/");
              }}
            >
              <BiArrowBack />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsReview;
