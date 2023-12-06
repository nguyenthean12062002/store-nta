import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../component/products/ProductsContext";
// images banner slide
import bannerSlide from "../../assets/images/banner__sales.avif";
//slide
import Slides from "../../component/slide/Slide";
//cart context
import { CartContext } from "../../component/cart/CartContext";
// css
import "./home.scss";
const Home = () => {
  useEffect(() => {}, []);
  const navigate = useNavigate();
  //cart context
  const { addProducts } = useContext(CartContext);
  //get products from context file
  const { products } = useContext(ProductsContext);
  // random demo products
  const lenghProducts = products.length;
  const idRandom = Math.floor(Math.random() * lenghProducts);
  const idRandom2 = Math.floor(Math.random() * lenghProducts);
  const idRandom3 = Math.floor(Math.random() * lenghProducts);

  const DiversityHandle = () => {
    const arr = [];
    products.filter((item) => {
      arr.push(item.category.name);
    });
    const newArr = [...new Set(arr)];
    return newArr.map((item) => {
      return <li className="py-half mx-half capitalize">{item}</li>;
    });
  };
  return (
    <div className="w-full h-full transition-all duration-200 ">
      {/* slogan shop */}
      <div className="w-full flex items-center justify-center ">
        <h3 className="text-center py-[22px] text-[1.1rem] italic underline text-main">
          We always bring dedication and perfection in every product!
        </h3>
      </div>
      {/* banner  */}
      <div className="w-full h-full ">
        <Slides />
      </div>
      {/* details */}
      <div className="flex items-center justify-center flex-col my-half">
        <h3 className="my-half text-[1.3rem] text-[#FEBD68] font-bold">
          Category of products
        </h3>
        <ul className="text-[1.1rem] text-gray-500 text-center flex flex-col md:flex-row items-center justify-evenly my-half">
          {DiversityHandle()}
        </ul>
      </div>
      {/* demo feature products */}
      <h4 className="mt-[42px] text-center text-[1.4rem] my-half text-main font-semibold underline">
        Feature
      </h4>
      <div className=" w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[12px] md:gap-y-0 md:gap-x-5 px-[22px] my-half  py-[22px] ">
        {products
          .filter((item, index) => {
            if (
              index === idRandom ||
              index === idRandom2 ||
              index === idRandom3
            ) {
              return item.category;
            }
          })
          .map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[210px] flex items-center justify-between border-[1px] rounded-xl p-[8px] cursor-pointer hover:border-[#FEBD68] transition-all duration-300 "
              >
                {/* <h3 className="w-[40%] text-[1.1rem] font-semibold">
                  {item.category.name}
                </h3> */}
                <div className="w-[40%] h-full ">
                  <img
                    src={item.category.image}
                    className="w-auto h-[100%] object-contain"
                  />
                </div>
                <div className="w-full h-full flex-1 ml-full flex items-center justify-center">
                  <div>
                    <h3 className="text-[1.2rem] uppercase mb-[4px]">
                      {item.category.name}
                    </h3>
                    <div className="text-[1rem] capitalize mb-[4px]">
                      {item.title}
                    </div>

                    <h4 className="text-main italic mb-[4px]">
                      $ {item.price}
                    </h4>
                    <p className="text-gray-500 text-[0.9rem] mb-[4px]">
                      {item.description}
                    </p>
                    {/* button action */}
                    <div className="mt-[8px]">
                      <button className="bg-main mr-[8px] p-[4px] rounded-lg text-white">
                        Buy now
                      </button>
                      <button
                        className=" border-[1px] border-[#333] p-[4px] rounded-lg bg-gray-100"
                        onClick={() => {
                          console.log(item.id);
                          addProducts(item, item.id);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* sales */}
      <h3 className="  px-full my-full text-[1.3rem] text-main font-semibold underline">
        Many customer appreciation programs
      </h3>
      <div className="w-full mt-[30px]  md:h-[300px] flex items-center justify-center md:justify-between flex-col md:flex-row  px-[24px]">
        <div className="w-full h-full md:w-[30%]  ">
          <h6 className="w-full h-full text-[1rem] leading-5 tracking-wider flex items-center justify-center select-none ">
            There are always great deals and discounts for our customers to
            experience these products. But besides that, it still has to bring
            durability and beauty to the product
          </h6>
        </div>
        <div className=" relative w-full h-full md:w-[65%] bg-slate-100 py-half mb-[70px] md:mb-0  object-cover rounded-xl my-full">
          <img
            src="https://intphcm.com/data/upload/banner-quang-cao-vang.jpg"
            className="h-full object-contain w-full rounded-xl md:rounded-none"
          />
          <button
            onClick={() => {
              navigate("/products");
            }}
            className="bg-white absolute h-[30px] shadow-2xl bottom-[5px] left-[10px] md:top-[50%] md:left-[10%] text-[1.1rem] rounded-xl p-[4px] hover:text-main transition-all duration-300 hover:text-[1.2rem]"
          >
            Products Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
