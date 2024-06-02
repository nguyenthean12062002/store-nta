import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../component/cart/CartContext";
import { LoginContext } from "../../component/login/LoginProvider";
import { BsCartCheck } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Flex from "../../component/components/flex/Flex";
import "./cartpage.scss";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";

const CartPages = () => {
  const { user } = useContext(LoginContext);
  const { cart, total, removeProduct, increaseAmout, decreaseAmout } =
    useContext(CartContext);
  const [show, setShow] = useState(true);
  const [hiddenButtonBuy, setHiddenButtonBuy] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setHiddenButtonBuy(cart.length === 0);
  }, [cart]);
  return (
    <div className="cart__page w-full h-full  lg:min-h-[85vh] mt-half flex flex-col md:flex-row items-center md:items-start justify-center bg-white">
      {/* content */}
      <div className="w-full max-w-main h-full relative">
        <div className="lg:px-0">
          <Flex justify="between" className="bg-bg py-full px-full">
            <Flex justify="start">
              <BsCartCheck className="text-[1.5rem] mr-half text-red" />
              <h5 className="text-[1.2rem] lg:text-[1.5rem]">ADDED PRODUCTS</h5>
            </Flex>
          </Flex>
          <div className="h-[400px] px-[4px] md:px-full md:px-0">
            {cart.length === 0 ? (
              <div className="w-full pt-[50px] flex items-center justify-center">
                <div>
                  <h3 className="text-[1.6rem] mb-[12px]">
                    Hello
                    <span className="text-[#FEBD68] ml-[20px] underline font-semibold uppercase">
                      {user.name}!
                    </span>
                  </h3>
                  <span className="text-gray-500 text-[1.3rem]">
                    Your cart is empty!
                  </span>
                  <Link to="/products" className="text-[1.1rem] underline">
                    Add products
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full h-[400px] my-[3px] md:my-half overflow-y-auto">
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center bg-bg transition-all duration-500 my-half px-[3px] md:px-half border-[0.5px] border-transparent hover:border-[#EF4444] hover:border-[0.5px] "
                  >
                    {/* checkbox */}
                    <div
                      className={`flex items-center justify-between  w-full h-full border-transparent p-half my-half transtion-all duration-300 border-b-[1px] `}
                    >
                      {/* img */}
                      <div className="w-[20%] mr-[8px] h-[60px] md:h-[80px] lg:h-[90px] object-cover flex items-center justify-center">
                        <img
                          alt="img"
                          className="h-full object-cover w-[80%] md:w-[40%]"
                          src={product.images}
                        />
                      </div>
                      {/* actions */}
                      <div className="w-[75%] md:w-[88%] lg:w-[80%] h-full">
                        {/* title and icon remove item */}
                        <div className="grid grid-cols-[60%,40%] md:grid-cols-[40%,30%,20%]  ">
                          {/* name product , add , remove ,price */}
                          <div className="w-full mr-[10px]">
                            <Link
                              to={`/products/id/${product.id}`}
                              className=" mb-half capitalize font-medium line-clamp-1 text-black text-[1rem] "
                            >
                              {product.title}
                            </Link>
                            {/* add remove amout */}
                            <div className="flex items-center justify-between w-[80px] md:w-[50px] md:w-[80px] mb-half text-gray-500">
                              <div
                                onClick={() => {
                                  decreaseAmout(product.id);
                                }}
                                className="w-[25px] h-[25px] bg-gray-200 flex items-center justify-center cursor-pointer "
                              >
                                <IoIosRemove />
                              </div>
                              <div className="text-[0.9rem] font-medium select-none mx-[4px]">
                                {product.amout}
                              </div>
                              <div
                                onClick={() => {
                                  increaseAmout(product.id);
                                }}
                                className="w-[25px] h-[25px] bg-gray-200 flex items-center justify-center cursor-pointer"
                              >
                                <IoMdAdd />
                              </div>
                            </div>
                            {/* price */}
                            <div className="font-medium underline text-main italic text-[0.9rem] ">
                              $ {product.price}
                            </div>
                          </div>
                          {/* des */}
                          <Flex
                            justify="center"
                            className="bg-blue hidden md:block"
                          >
                            <p className="text-gray-500 line-clamp-3 leading-5 tracking-wide text-[0.9rem]  ">
                              {product.description}
                            </p>
                          </Flex>
                          {/* remove and result price */}
                          <div className="w-full h-full">
                            {/* remove products */}
                            <div
                              onClick={() => {
                                removeProduct(product.id);
                              }}
                              className="w-full flex items-start justify-end text-[1.2rem] lg:text-[1.5rem] cursor-pointer text-red transition-all duration-200 hover:opacity-[0.5]"
                            >
                              <BsTrash />
                            </div>
                            {/* result price */}
                            <div className="text-main  font-medium flex items-end justify-end mt-half">
                              <span className="text-[0.9rem] md:text-[1rem[">
                                $:
                                {parseInt(
                                  product.price * product.amout
                                ).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          hidden={show}
          className="absolute top-[10%] left-[2.5%] md:top-[10%] md:left-[11%] w-[95%] md:w-[80%] md:h-[90%] bg-white rounded-xl z-10 shadow-2xl"
        >
          {user && user.name ? (
            <div className="w-full h-full"></div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[1.2rem] text-gray-500">
                Please log in to your account to continue shopping!
              </span>
              <h3 className="ml-[4px] font-bold text-[1.25rem]">
                Go to{" "}
                <Link to="/login" className="text-main underline italic">
                  Login
                </Link>
              </h3>
            </div>
          )}
        </div>
        <div
          hidden={show}
          className="w-[100vw] h-[100vh] absolute top-0 left-0 right-0 z-[4] bg-[rgba(0,0,0,0.13)]"
          onClick={() => setShow(true)}
        ></div>
      </div>
      {/* bottom and button buy */}
      <div className="relative md:fixed  md:bottom-0 w-full  h-[120px] flex items-center justify-center">
        <div className="w-[100%] lg:w-[1200px] h-[120px] shadow-xl grid grid-cols-[30%,70%] gap-x-[2%] items-center bg-bg mt-half  px-full">
          <Flex
            justify="center"
            className="h-[30%] md:h-[40%] bg-white text-black shadow-xl button"
          >
            <IoChatboxEllipsesOutline />
            <h4 className="ml-[4px]">Chat</h4>
          </Flex>
          <Flex justify="between" className="w-full h-full text-start  ">
            <div className="w-full text-sub font-[300] lg:font-semibold mr-[18px]">
              <span>Total payment products:</span>
              <span className="text-main underline ml-half">${total}</span>
            </div>
            <Link
              to="/cart/buy"
              className={`${
                hiddenButtonBuy ? "select-none cursor-none opacity-[0.4]" : ""
              } button bg-red text-white min-w-[40%] `}
              onClick={() => setShow(false)}
            >
              Buy Now
            </Link>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default CartPages;
