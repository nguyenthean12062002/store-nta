import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProductsContext } from "../../component/products/ProductsContext";
// search
import Search from "../../component/search/Search";
// header
import Header from "../../layout/Header/Header";
//slide
import Slides from "../../component/slide/Slide";
//cart context
import { CartContext } from "../../component/cart/CartContext";
// css
import "./home.scss";
// iconFB component
import IconFaceBook from "../../component/iconComponent/IconFaceBook";
//icon Mess
import IconMess from "../../component/iconComponent/IconMess";
// icon
import { SiQuarkus } from "react-icons/si";
import { FaSquareFontAwesomeStroke } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";

const Home = () => {
  useEffect(() => {}, []);
  const navigate = useNavigate();
  //cart context
  const { addProducts } = useContext(CartContext);
  //get products from context file
  const { products } = useContext(ProductsContext);
  // state
  const [showButtonToTop, setShowButtonToTop] = useState(true);
  // random demo products
  const lenghProducts = products.length;
  const idRandom = Math.floor(Math.random() * lenghProducts);
  const idRandom2 = Math.floor(Math.random() * lenghProducts);
  const idRandom3 = Math.floor(Math.random() * lenghProducts);

  // show button scroll to top
  window.addEventListener("scroll", () => {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos > 480) {
      setShowButtonToTop(false);
    } else {
      setShowButtonToTop(true);
    }
  });
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
    <div className="bg-bg w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[1300px] h-full transition-all duration-200 relative  py-full ">
        {/* slogan shop */}
        <div className="w-full flex items-center justify-center ">
          <h3 className="w-full text-center py-[0px]  pt-[44px] text-[1rem] md:text-[1.3rem] lg:text-[1.4rem] font-medium text-red px-full">
            We always bring dedication and perfection in every product!
          </h3>
        </div>
        {/* search */}
        <div className="w-full flex items-center justify-center  mb-[44px] ">
          <Search />
        </div>
        {/* banner  */}
        <div className="w-full h-full ">
          <Slides />
        </div>
        {/* show icon about shop */}
        <div className="w-full flex items-center justify-center px-full my-full ">
          <div className="w-full h-full  py-[58px] md:py-[88px] grid grid-cols-2 md:grid-cols-4 gap-[12px] ">
            {/* item */}
            <div className="flex items-center select-none  justify-start flex-col">
              <SiQuarkus className=" text-[2.5rem] md:text-[2.8rem] h-[50px] lg:text-[3.5rem] mb-full text-[#333] " />
              <h4 className="text-center text-[1rem] md:text-[1.1rem] uppercase h-[30px] md:h-auto  text-red md:text-start">
                Commitment to quality
              </h4>
              <p className="text-gray-500 text-center pt-[4px] px-full text-[0.85rem] tracking-wider md:text-[0.9rem]">
                Compensate 10 times the value if counterfeit goods are detected
              </p>
            </div>
            {/* item */}
            <div className="flex items-center select-none  justify-start flex-col">
              <FaSquareFontAwesomeStroke className=" text-[2.5rem] md:text-[2.8rem] h-[50px] lg:text-[3.5rem] mb-full text-[#333] " />
              <h4 className="text-center text-[1rem] md:text-[1.1rem] uppercase h-[30px] md:h-auto  text-red md:text-start">
                return the product
              </h4>
              <p className="text-gray-500 text-center pt-[4px] px-full text-[0.85rem] tracking-wider md:text-[0.9rem]">
                Return the product within 24 hours from the time of receipt
              </p>
            </div>
            {/* item */}
            <div className="flex items-center select-none  justify-start flex-col">
              <FaShippingFast className=" text-[2.5rem] md:text-[2.8rem] h-[50px] lg:text-[3.5rem] mb-full text-[#333] " />
              <h4 className="text-center text-[1rem] md:text-[1.1rem] uppercase h-[30px] md:h-auto  text-red md:text-start">
                Delivery
              </h4>
              <p className="text-gray-500 text-center pt-[4px] px-full text-[0.85rem] tracking-wider md:text-[0.9rem]">
                Nationwide delivery, COD payment at the place of delivery
              </p>
            </div>
            {/* item */}
            <div className="flex items-center select-none  justify-start flex-col">
              <FaHandsHelping className=" text-[2.5rem] md:text-[2.8rem] h-[50px] lg:text-[3.5rem] mb-full text-[#333] " />
              <h4 className="text-center text-[1rem] md:text-[1.1rem] uppercase h-[30px] md:h-auto  text-red md:text-start">
                Enthusiastic advice
              </h4>
              <p className="text-gray-500 text-center pt-[4px] px-full text-[0.85rem] tracking-wider md:text-[0.9rem]">
                Enthusiastic care consulting and service 24/7
              </p>
            </div>
          </div>
        </div>
        {/* details */}
        <div className="w-full flex items-center justify-center flex-col my-full bg-white">
          <h3 className="w-full  pl-half my-half py-half text-[1.4rem] text-black font-medium">
            Category of products
          </h3>
          <ul className="text-[1.1rem] text-gray-500 text-center flex flex-col md:flex-row items-center justify-evenly my-half">
            {DiversityHandle()}
          </ul>
        </div>
        {/* suggestion products */}
        <div className="w-full h-full my-full  ">
          <h3 className="mt-[42px] bg-white pl-half text-[1.4rem] py-full text-black font-medium ">
            Suggestion today
          </h3>
          <div className=" w-full pt-[4px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[12px] md:gap-y-0 md:gap-x-[4px]">
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
                  <div className="bg-white relative overflow-hidden ">
                    <Link
                      to={`/products/${item.id}`}
                      key={index}
                      className="w-full h-[210px] flex items-center justify-between  p-[8px] cursor-pointer hover:border-[#FEBD68] transition-all duration-300 "
                    >
                      <div className="w-[40%] h-full ">
                        <img
                          src={item.category.image}
                          className="w-auto h-[100%] object-contain"
                        />
                      </div>
                      <div className="w-full h-full flex-1 ml-full flex items-center justify-center">
                        <div>
                          <h3 className="text-[1.1rem] uppercase mb-[4px]">
                            {item.category.name}
                          </h3>
                          <div className="text-[1rem] capitalize mb-[4px]">
                            {item.title}
                          </div>

                          <h4 className="text-main italic mb-[4px]">
                            $ {item.price}
                          </h4>
                          <p className="text-gray-500 text-[0.9rem] mb-[4px] line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                    {/* button action */}
                    <div className="mt-[8px] absolute bottom-[10%] right-[10%]">
                      <Link
                        to="/cart/buy"
                        className="bg-main mr-[8px] p-[4px] rounded-lg text-white"
                      >
                        Buy now
                      </Link>
                      <button
                        className=" border-[1px] border-[#333] py-[6.5px] p-[4px] rounded-lg bg-red text-white"
                        onClick={() => {
                          addProducts(item, item.id);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* sales */}
        <div className="w-full h-full bg-white my-[44px] ">
          <h3 className="my-full pl-half text-[1.4rem] text-black font-medium pt-full">
            Many customer appreciation programs
          </h3>
          <div className="w-full mt-[30px] bg-white md:h-[380px] flex items-center justify-center md:justify-between flex-col md:flex-row  px-[24px]">
            <div className="w-full h-full md:w-[30%]  ">
              <h6 className="w-full h-full text-[1rem] text-gray-700 leading-5 tracking-wider flex items-center justify-center select-none ">
                There are always great deals and discounts for our customers to
                experience these products. But besides that, it still has to
                bring durability and beauty to the product
              </h6>
            </div>
            <div className=" relative w-full h-[85%] md:w-[65%] bg-bg py-half mb-[70px] md:mb-0  object-cover rounded-xl my-full">
              <img
                src="https://intphcm.com/data/upload/banner-quang-cao-vang.jpg"
                className="h-full object-contain w-full rounded-xl md:rounded-none"
              />
              <button
                onClick={() => {
                  navigate("/products");
                }}
                className="bg-white absolute h-[30px] shadow-2xl bottom-[5px] left-[10px] md:top-[50%] md:left-[10%] text-[1.1rem] rounded-xl p-[4px] text-red hover:text-main transition-all duration-300 hover:text-[1.2rem]"
              >
                Products Us
              </button>
            </div>
          </div>
        </div>
        {/* iconFacebook and messeger */}
        <div className="w-full h-[150px] top-[75%] left-[-10px]  fixed z-[110]">
          <div className="flex items-center justify-end mb-[12px]">
            <IconFaceBook />
          </div>
          <div className=" w-full flex items-center justify-end">
            <IconMess />
          </div>
        </div>
        {/* button go to top pages */}
        <div
          hidden={showButtonToTop}
          className="fixed z-[110] w-full bottom-[20px] right-[-10px] transition-all duration-500 "
        >
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="w-[30px] h-[30px] md:w-[40px] flex items-center justify-center md:h-[40px] bg-main shadow-3xl cursor-pointer "
          >
            <BsArrowUpCircleFill className="text-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
