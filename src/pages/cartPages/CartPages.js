import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../component/cart/CartContext";
import CartItem from "../../component/cart/CartItem";
import { LoginContext } from "../../component/login/LoginProvider";
// icon
import { BsCartCheck } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
// flex
import Flex from "../../component/components/flex/Flex";
import "./cartpage.scss";
const CartPages = () => {
  const { user } = useContext(LoginContext);
  const { cart, totalCart } = useContext(CartContext);
  const [show, setShow] = useState(true);
  const [hiddenButtonBuy, setHiddenButtonBuy] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let arrChecked = [];
  // Scroll to top when pages render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // NO product in cart is hidden  button buy
  useEffect(() => {
    if (cart.length === 0) {
      setHiddenButtonBuy(true);
    }
  }, [cart]);
  // select all product in cart
  const allCheckBox = document.querySelectorAll("#checBoxCartPages");
  const handleCheckBokAll = (e) => {
    allCheckBox.forEach((item) => {
      if (e.target.checked) {
        item.checked = true;
      } else item.checked = false;
    });
  };
  allCheckBox.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
    });
  });
  // show total money when click products want to buy
  const handleTotalCart = () => {
    arrChecked.forEach((item) => {
      console.log(item);
    });
  };
  return (
    <div className="cart__page w-full h-full min-h-[85vh] mt-half flex items-start justify-center bg-white">
      {/* show products in cart */}
      <div className="w-full max-w-main h-full relative ">
        <div className="lg:px-0">
          {/* title */}
          <Flex justify="between" className="bg-bg py-full px-full">
            <Flex justify="start" className="">
              <BsCartCheck className="text-[1.5rem] mr-half text-red" />
              <h5 className=" text-[">ADDED PRODUCTS</h5>
            </Flex>
            <div
              className=" ml-half"
              onClick={(e) => {
                handleCheckBokAll(e);
              }}
            >
              <input id="check" type="checkbox" />
              <label for="check" className="cursor-pointer ml-[4px] text-red">
                Select all
              </label>
            </div>
          </Flex>
          {/* show product added cart */}
          <div className="h-[400px] px-full md:px-0">
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
                  <Link to="/products" className="text-[1.1rem] underline">
                    Add the products
                  </Link>
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
                      <CartItem products={products} />
                    </div>
                  );
                })}
              </div>
            )}
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
      {/* button  buy and chat*/}
      <div className="fixed bottom-0 w-full h-[120px] flex items-center justify-center ">
        <Flex
          justify="between"
          className="w-[1200px] h-[120px] shadow-3xl bg-bg  mt-half border-t-[1px] px-full "
        >
          {/* chat */}
          <Flex
            justify="center"
            className="h-[40%] bg-red text-white cursor-pointer px-half hover:opacity-[0.65] transition-all duration-300 "
          >
            <IoChatboxEllipsesOutline />
            <h4 className="ml-[4px]">Chat</h4>
          </Flex>
          {/* button buy */}
          <div className="h-full flex items-center justify-beetwen">
            <div className="text-gray-500 font-semibold mr-[18px]">
              <span>Total payment products:</span>
              <span className="text-main underline ml-half">${totalCart}</span>
            </div>
            <div>
              <Link
                to="/cart/buy"
                className={`${
                  hiddenButtonBuy ? "select-none cursor-none opacity-[0.4]" : ""
                } bg-red text-white px-[8px] py-[12px] text-gray-800 text-[0.9rem] `}
                onClick={() => {
                  setShow(false);
                }}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CartPages;
