import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//cart context
import { CartContext } from "../../component/cart/CartContext";
//product context
import { ProductsContext } from "../../component/products/ProductsContext";
// products
import Product from "../../component/products/Product";
// flex
import Path from "../../layout/Path/Path";
import Flex from "../../component/flex/Flex";
// icon
import { FaFacebookSquare } from "react-icons/fa";
import { GiTwister } from "react-icons/gi";
import { SiShopee } from "react-icons/si";
import { PiStarThin } from "react-icons/pi";

const ProductsReview = () => {
  const [valueComments, setValueComments] = useState("");
  // Đặt lại pathname về trang chủ
  const handleReload = () => {
    window.location.href = "/";
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      handleReload();
    });
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);
  // Thực hiện scroll đến đầu trang khi component được render lại
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { addProducts } = useContext(CartContext);
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
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
  const { title, images, price, description } = product;
  // handle show comment
  //
  const showComments = () => {
    console.log(valueComments);
  };
  return (
    <div className="bg-bg w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] h-full mt-full pb-full">
        {/* path */}
        <div className="px-full xl:px-0">
          <Path />
        </div>
        {/* review */}
        <div className="w-full h-full min-h-[700px] bg-white md:h-[500px] px-full md:px-[10%] grid grid-cols-1 md:grid-cols-2 ">
          {/* img */}
          <div className="w-[90%] md:w-[70%] lg:w-[70%] h-auto m-auto  flex flex-col items-center justify-center py-full">
            <img
              src={images || images[0]}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* ảnh thêm   */}
            <div className="w-full h-[120px] grid grid-cols-3 mt-half gap-x-[8px]">
              {images.map((img, index) => {
                return (
                  <div onClick={() => {}} className="cursor-pointer">
                    <img
                      src={img}
                      key={index}
                      className="w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* info products */}
          <div className="h-full w-full pb-full  flex items-start justify-start ">
            <div className="w-full mt-full">
              {/* title */}
              <h4 className="py-half text-black font-extrabold text-[1.5rem] text-center">
                {title}
              </h4>
              {/* category */}
              <h5 className="text-[1.1rem] italic py-half text-center border-b-[0.7px]">
                {product.category.name}
              </h5>

              {/* price */}
              <h2 className="font-bold text-[1.4rem] my-full text-main underline">
                $ {price}
              </h2>
              {/* socical action */}
              <Flex
                justify="start"
                className="border-t-[0.7px] w-full h-[50px]"
              >
                {/* fb */}
                <Flex
                  justify="center"
                  className="px-[4px] cursor-pointer h-[65%] bg-[#0866FF] text-white"
                >
                  <FaFacebookSquare />
                  <span className="ml-[4px]">Facebook</span>
                </Flex>
                {/* twister */}
                <Flex
                  justify="center"
                  className="w-[86px] cursor-pointer h-[65%] ml-half bg-[#1DA1F2] text-white"
                >
                  <GiTwister />
                  <span className="ml-[4px]">Twister</span>
                </Flex>
                {/* shoppee */}
                <Flex
                  justify="center"
                  className="w-[86px] cursor-pointer h-[65%] ml-half bg-[#EE4D2D] text-white"
                >
                  <SiShopee />
                  <span className="ml-[4px]">Shoppe</span>
                </Flex>
              </Flex>
              {/* rating */}
              <Flex
                justify="start"
                className="mb-half border-t-[0.7px] pt-half"
              >
                <span>Rating:</span>
                {/* show start */}
                <Flex justify="center" className="ml-half">
                  <PiStarThin className="mx-[2px] select-none text-red" />
                  <PiStarThin className="mx-[2px] select-none" />
                  <PiStarThin className="mx-[2px] select-none" />
                  <PiStarThin className="mx-[2px] select-none" />
                  <PiStarThin className="mx-[2px] select-none" />
                </Flex>
              </Flex>
              {/* color */}
              <Flex justify="start" className="mb-half">
                <span>Color:</span>
                {/* show color products */}
                <Flex justify="start" className="ml-half">
                  <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-black"></button>
                  <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-red"></button>
                  <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-bg"></button>
                  <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-main"></button>
                </Flex>
              </Flex>
              {/* size */}
              <Flex justify="start">
                <span>Size:</span>
                {/* size */}
                <Flex justify="start" className="ml-half">
                  <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-bold">
                    S
                  </button>
                  <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-bold">
                    M
                  </button>{" "}
                  <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-bold">
                    L
                  </button>{" "}
                  <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-bold">
                    XL
                  </button>
                </Flex>
              </Flex>
              {/* button action */}
              <div className="flex items-center justify-between h-[32px] md:h-[40px] mt-full pt-full border-t-[0.7px]">
                <div className="h-[34px] flex items-center jusify-center">
                  <button
                    className="border p-[4px] h-full text-white bg-red h-full   px-[6px] mr-full hover:opacity-80 "
                    onClick={() => {
                      addProducts(product, id);
                    }}
                  >
                    Add cart
                  </button>
                  <Link
                    to="/cart/buy"
                    className=" flex items-center justify-center h-full inline-block text-white bg-main h-full   px-[6px] hover:opacity-80 "
                  >
                    Buy now
                  </Link>
                </div>
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
        {/* describe products */}
        <div className="w-full h-full border-b-[0.7px] mt-full">
          <h3 className="text-[1.2rem] px-full xl:px-half">Describe</h3>
          <p className="text-gray-400  my-half w-full tracking-tight text-[1.1rem] leading-[1.2rem] pl-[40px] md:pl-full">
            {description}
          </p>
        </div>
        {/* feedback abouts products*/}
        <div className="w-fulll border-[1px] border-red min-h-[320px] mx-full xl:mx-0 mt-full  relative">
          <div>
            <span className="block py-half px-half bg-white text-[1.2rem]">
              Comments
            </span>
            {/* show comment */}
            <div className="w-full h-full ">{showComments}</div>
            {/* write comment and button */}
            <div className="w-full h-[62px] absolute bottom-[42px] p-half mb-half">
              <input
                className="border-b-[1px] w-full h-full px-half mb-half "
                onChange={(e) => {
                  setValueComments(e.target.value);
                }}
                placeholder="...aaa"
              />
              <button className="w-[100px] h-full flex items-center justify-center bg-main text-white cursor-pointer ">
                Comments
              </button>
            </div>
          </div>
        </div>
        {/* sản phẩm liên quan */}
        <div className="w-full mt-[60px] px-full md:px-0 ">
          <div className="text-center w-full pt-full md:mt-0">
            <h3 className="text-main text-[1.4rem] mb-full font-bold ">
              Related Products:
              <span className="text-red-500 pl-half text-[1.5rem]">
                {product.category.name}
              </span>
            </h3>
          </div>
          {/* list sản phẩm liên quan */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px]">
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
    </div>
  );
};

export default ProductsReview;
