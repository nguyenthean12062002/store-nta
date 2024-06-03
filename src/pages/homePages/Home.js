import React, { useContext, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProductsContext } from "../../component/products/ProductsContext";
import Flex from "../../component/components/flex/Flex";
//slide
import Banner from "../../component/banner/Banner";
//cart context
import { CartContext } from "../../component/cart/CartContext";
// css
import "./home.scss";
// icon
import IconFaceBook from "../../component/iconComponent/IconFaceBook";
import IconTele from "../../component/iconComponent/IconTele";
import { MdAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { SiQuarkus } from "react-icons/si";
import { FaSquareFontAwesomeStroke } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import posterTrending from "../../assets/images/poster-trending.avif";
const Home = () => {
  const navigate = useNavigate();
  //cart context
  const { addProducts } = useContext(CartContext);
  //get products from context file
  const { products } = useContext(ProductsContext);
  // state
  const lenghProducts = products.length;
  const idRandom = Math.floor(Math.random() * lenghProducts);
  const idRandom2 = Math.floor(Math.random() * lenghProducts);
  const idRandom3 = Math.floor(Math.random() * lenghProducts);
  const idRandom4 = Math.floor(Math.random() * lenghProducts);
  const idRandom5 = Math.floor(Math.random() * lenghProducts);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  // window.addEventListener("scroll", () => {
  //   var currentScrollPos = window.scrollY;
  //   if (currentScrollPos > 480) {
  //     setShowButtonToTop(false);
  //   } else {
  //     setShowButtonToTop(true);
  //   }
  // });
  const DiversityHandle = useCallback(() => {
    const arr = [];
    products.filter((item) => {
      return arr.push(item.category.name);
    });
    const newArr = [...new Set(arr)];
    return newArr.map((item, index) => {
      return (
        <li
          key={index}
          className="py-half mx-[3px] text-sub font-[300] md:mx-half capitalize"
        >
          {item}
        </li>
      );
    });
  }, [products]);
  return (
    <Flex
      justify="center"
      className="w-full h-full transition-all flex-col duration-300 relative  pb-full bg-white "
    >
      {/* banner  */}
      <div className="w-full h-full ">
        <Banner />
      </div>
      {/* content home */}
      <div className="w-full h-full max-w-main">
        {/* show icon about shop */}
        <div className="w-full bg-bg flex items-center justify-center px-full my-full ">
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
        <div
          id="home__details"
          className="w-full flex items-center justify-center flex-col my-full bg-white"
        >
          <h3 className="w-full  pl-full my-half py-half text-[1.4rem] text-black font-medium">
            Category Of Products
          </h3>
          <ul className="text-[1.1rem] text-sub text-center flex flex-row whitespace-wrap px-half items-center justify-evenly my-half">
            {DiversityHandle()}
          </ul>
        </div>
        {/* suggestion products */}
        <div
          id="home__suggestion"
          className="w-full h-full my-full bg-bg py-full px-half  lg:px-full "
        >
          <h3 className="mt-full pl-half text-[1.4rem] py-full text-black font-medium ">
            Trending Products Today
          </h3>
          <Flex
            justify="between"
            className="trending__wrapper flex-col md:flex-row h-[100%]"
          >
            {/* poster trending */}
            <div className="relative">
              <img
                className="w-full h-full"
                alt="poster__trending"
                src={posterTrending}
              />
              <div className="absolute top-[10%] left-[20px] ">
                <h4 className="text-[1.5rem] text-sub">
                  <span className="block text-red font-semmibold text-[1.9rem] underline ">
                    Explore
                  </span>
                  and experience with us
                </h4>
              </div>
            </div>
            {/* show products trending */}
            <div className="bg-bg w-full h-full   md:px-0  grid grid-cols-1  lg:grid-cols-2 gap-3">
              {products
                .filter((item, index) => {
                  if (
                    index === idRandom ||
                    index === idRandom2 ||
                    index === idRandom3 ||
                    index === idRandom4 ||
                    index === idRandom5
                  ) {
                    return item.category;
                  } else {
                    return 0;
                  }
                })
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full h-full min-w-[100%] min-h-[200px] item__trending relative w-full bg-main h-full transition-all duration-300"
                    >
                      <div className="w-full h-full grid grid-cols-2 gap-x-[4px] bg-white ">
                        {/* img */}
                        <Link
                          to={`/products/id/${item.id}`}
                          key={index}
                          className="w-[100%]  h-[100%] p-[8px] cursor-pointer  transition-all duration-300 "
                        >
                          <div className="trending__img w-full h-full ">
                            <img
                              src={item.category.image}
                              alt="img"
                              className=" w-full h-full object-cover "
                            />
                          </div>
                        </Link>
                        {/* info product */}
                        <div className="w-full  h-full p-half ">
                          <Link
                            to={`/products/id/${item.id}`}
                            className="w-[100%] block text-[1rem] text-strat h-auto capitalize mb-[4px] overflow-hidden	 whitespace-nowrap text-ellipsis text__hover"
                          >
                            {item.title}
                          </Link>
                          <h4 className="text-sub text-[0.9rem]  mb-[4px]">
                            {item.category.name}
                          </h4>
                          <h4 className="text-sub text-[0.9rem]  mb-[4px]">
                            {item.creationAt}
                          </h4>
                          <h4 className="text-main italic mb-[4px]">
                            $ {item.price}
                          </h4>
                        </div>
                        <Flex
                          justify="between"
                          className="absolute z-20 gr__button  bottom-[3%] right-[10%] p-[4px]     "
                        >
                          <button
                            onClick={() => {
                              addProducts(item, item.id);
                            }}
                            className="button mr-[6px]  text-white bg-slate-600 flex items-center justify-center "
                          >
                            <MdAdd />
                          </button>
                          <button
                            onClick={() => {}}
                            className="button text-white bg-red flex items-center cursor-pointer justify-center"
                          >
                            <FaHeart />
                          </button>
                        </Flex>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Flex>
        </div>
        {/* sales */}
        <div className="w-full h-full bg-white my-[44px] ">
          <h3 className="my-full text-[1.4rem] text-black font-medium pt-full px-full md:px-full ">
            Many customer appreciation programs
          </h3>
          <div className="w-full mt-[30px] bg-white md:h-[380px] flex items-center justify-center md:justify-between flex-col md:flex-row px-full lg:px-0">
            <div className="w-full h-full md:w-[30%]  ">
              <h6 className="w-full h-full text-[1rem] text-gray-700 leading-5 tracking-wider flex items-center justify-center select-none ">
                There are always great deals and discounts for our customers to
                experience these products. But besides that, it still has to
                bring durability and beauty to the product
              </h6>
            </div>
            <div className=" relative w-full h-[85%] rounded-3xl md:w-[65%] bg-bg py-half mb-[70px] md:mb-0  object-cover rounded-xl my-full">
              <img
                alt="img"
                src="https://intphcm.com/data/upload/banner-quang-cao-vang.jpg"
                className="h-full object-contain w-full rounded-xl md:rounded-none"
              />
              <button
                onClick={() => {
                  navigate("/products");
                }}
                className="absolute button left-0 md:left-[10px] top-[100%] md:top-[45%] md:left-[5%] text-[1.1rem]  p-[4px] text-white bg-red "
              >
                Products Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* iconFacebook and messeger */}
      <div className="w-full h-[150px] top-[80%] md:top-[75%] left-[-10px]  fixed z-[110]">
        <div className="flex items-center justify-end mb-[12px] animate-pulse">
          <IconFaceBook />
        </div>
        <div className=" w-full flex items-center justify-end animate-pulse ">
          <IconTele />
        </div>
      </div>
      {/* button go to top pages */}
      {/* <div
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
          className="w-[30px] h-[30px] md:w-[40px] flex items-center justify-center md:h-[40px] bg-main shadow-3xl cursor-pointer animate-bounce"
        >
          <BsArrowUpCircleFill className="text-[2rem]" />
        </div>
      </div> */}
    </Flex>
  );
};
export default Home;
