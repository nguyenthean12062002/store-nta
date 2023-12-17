import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// header
import { CartContext } from "../../component/cart/CartContext";
import CartItem from "../../component/cart/CartItem";
import { LoginContext } from "../../component/login/LoginProvider";
import { BsCartCheck } from "react-icons/bs";
import Flex from "../../component/flex/Flex";
const CartPages = () => {
  const { user } = useContext(LoginContext);
  const { cart, totalCart, removeAllProducts, cout } = useContext(CartContext);
  const [show, setShow] = useState(true);
  const [hiddenButtonBuy, setHiddenButtonBuy] = useState(false);
  useEffect(() => {
    if (cart.length === 0) {
      setHiddenButtonBuy(true);
    }
  });
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex items-center justify-center bg-bg">
      <div className="w-full max-w-[1300px] h-full relative  mt-full ">
        <div className="px-[22px]">
          {/* title */}
          <Flex justify="between" className="bg-white py-full px-half">
            <Flex justify="start" className="">
              <BsCartCheck className="text-[1.5rem] mr-half text-red" />
              <h5 className=" text-[">ADDED PRODUCTS</h5>
            </Flex>
            <div className=" ml-half">
              <input id="check" type="checkbox" />
              <label for="check" className="cursor-pointer ml-[4px] text-red">
                Select all
              </label>
            </div>
          </Flex>
          {/* show product added cart */}
          <div className="h-[400px]">
            {cart.length === 0 ? (
              <div className="w-full pt-[50px] flex items-center justify-center">
                <div>
                  <h3 className="text-[1.6rem] mb-[12px]">
                    Hello
                    <span className="text-[#FEBD68] ml-[20px] underline font-semibold uppercase">
                      {user.name} !
                    </span>
                  </h3>
                  <span className="text-gray-500 text-[1.3rem]">
                    Your cart is empty!{" "}
                  </span>
                  <a href="/products" className="text-[1.1rem] underline">
                    Add the products
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-full h-[400px] my-half  overflow-y-auto">
                {cart.map((products, index) => {
                  return (
                    <div
                      key={`key-${index}`}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center justify-beetwen mr-half">
                        <input type="checkbox" className="w-[20px] h-[20px] " />
                      </div>
                      <CartItem products={products} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* button  buy */}
        <div className="w-full h-[50px] flex items-center justify-end bg-gray-100  px-[12px] ">
          <div className="flex items-center justify-beetwen">
            <div className="text-gray-500 font-semibold mr-[18px]">
              <span>Total payment ({cout}) products:</span>
              <span className="">${totalCart}</span>
            </div>
            <div>
              <Link
                to="/cart/buy"
                className={`${
                  hiddenButtonBuy ? "select-none cursor-none opacity-[0.4]" : ""
                } bg-[#FEBD68] px-[8px] py-[12px] text-gray-800 text-[0.9rem]`}
                onClick={() => {
                  setShow(false);
                }}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        {/* modal buy now */}
        <div
          hidden={show}
          className="absolute top-[10%] left-[2.5%] md:top-[10%] md:left-[11%]  w-[95%] md:w-[80%] md:h-[90%] bg-white rounded-xl z-10 shadow-2xl"
        >
          {user && user.name ? (
            <>
              <div className="w-full h-full "></div>
            </>
          ) : (
            <>
              <div className="w-full h-full flex items-center justify-center ">
                <span className="text-[1.2rem] text-gray-500">
                  Please log in to your account to continue shopping !
                </span>
                <h3 className="ml-[4px] font-bold text-[1.25rem]">
                  Go to{" "}
                  <Link to="/login" className="text-main underline italic">
                    Login
                  </Link>
                </h3>
              </div>
            </>
          )}
        </div>
        {/* wrapper overlay */}
        <div
          hidden={show}
          className="w-[100vw] h-[100vh]  absolute top-0 left-0 right-0 z-[4] bg-[rgba(0,0,0,0.13)] "
          onClick={() => {
            setShow(true);
          }}
        ></div>
      </div>
    </div>
  );
};

export default CartPages;
