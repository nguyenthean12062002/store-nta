import React, { useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//cart context
import { CartContext } from "../../component/cart/CartContext";
//product context
import { ProductsContext } from "../../component/products/ProductsContext";
// products
import Product from "../../component/products/Product";
import { BiArrowBack } from "react-icons/bi";
const ProductsReview = () => {
  useEffect(() => {
    // window.onload(screenTop(0));
  }, []);
  const navigate = useNavigate();
  const { addProducts } = useContext(CartContext);
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((item, index) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-[20px] font-semibold transition-all ">
        Loading...
      </div>
    );
  }
  const { title, images, price, description, amount } = product;
  console.log(product);
  return (
    <div className="w-full h-full mt-[36px] md:mt-[80px]">
      {/* review */}
      <div className="w-full h-[700px] md:h-[500px] px-[10%] flex flex-col md:flex-row items-center justify-between">
        {/* img */}
        <div className="w-[90%] md:w-[70%] lg:w-[50%] h-full md:h-[240px] lg:h-[300px]  flex flex-col items-center justify-center">
          <img
            src={images || images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* ảnh thêm   */}
          <div className="w-full h-[120px] grid grid-cols-3 mt-full gap-x-[8px]">
            {images.map((img, index) => {
              return (
                <div onClick={() => {}} className="cursor-pointer">
                  <img src={img} key={index} className="w-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
        {/* info products */}
        <div className="h-full w-full  flex items-center justify-center mt-half lg:p-[20px] md:pl-[40px]">
          <div className="w-full">
            {/* title */}
            <h4 className="py-half text-black font-extrabold text-[1.5rem] text-center">
              {title}
            </h4>
            {/* category */}
            <h5 className="text-[1.1rem] italic py-half text-center">
              {product.category.name}
            </h5>
            {/* des */}
            <p className="text-gray-400 my-full w-full tracking-tight text-[1.1rem] leading-[1.2rem] ">
              {description}
            </p>
            {/* price */}
            <h2 className="font-bold text-[1.4rem] mb-half text-main underline">
              $ {price}
            </h2>
            {/* button action */}
            <div className="flex items-center justify-between h-[32px] md:h-[40px] mt-[32px]">
              <div className="h-full">
                <button
                  className="border p-[4px] text-white bg-red-500 h-full  rounded-xl px-[6px] mr-full hover:opacity-80 "
                  onClick={() => {
                    addProducts(product, id);
                  }}
                >
                  Add cart
                </button>
                <Link
                  to="/cart/buy"
                  className="border py-[6px] md:py-[9.5px] text-white min-h-[32px] md:min-h-[40px] bg-red-500 h-full rounded-xl  px-[6px] hover:opacity-80 "
                >
                  Buy now
                </Link>
              </div>
              <button
                className="h-full bg-gray-500 shadow-xl text-white px-[10px] flex items-center justify-between hover:text-main hover:bg-gray-200 transition-all duration-300 rounded-xl"
                onClick={() => {
                  navigate("/products");
                }}
              >
                <BiArrowBack className="mr-[3px]" />
                Products
              </button>
            </div>
            {/* date create , date update */}
            <div className=" mt-full h-full">
              <span className="text-gray-500 italic text-[0.9rem]">
                {product.updatedAt}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* sản phẩm liên quan */}
      <div className="w-full px-full mt-[60px] ">
        <div
          className="text-center w-full p
        t-full md:mt-0"
        >
          <h3 className="text-main text-[1.4rem] mb-full font-bold ">
            Related Products:
            <span className="text-red-500 pl-half text-[1.5rem]">
              {product.category.name}
            </span>
          </h3>
        </div>
        {/* list sản phẩm liên quan */}

        <div className="grid grid-colsZ-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[36px]">
          {products
            .filter((item) => {
              if (
                item.category.name === product.category.name &&
                item.title !== product.title
              ) {
                return item.category.name;
              } else if (
                // product.category.name === "All" ||
                product.category.name === ""
              ) {
                return [];
              }
            })
            .map((product, index) => {
              return <Product products={product} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsReview;
