import React, { useState, useContext, useEffect, useCallback } from "react";
import "./header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { MdCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";
import ModalLogin from "../ModalLogin/ModalLogin";
import OverLay from "../OverLay/OverLay";
import Nav from "../Nav/Nav";
//cart context
import { CartContext } from "../../component/cart/CartContext";
// login context
import { LoginContext } from "../../component/login/LoginProvider";
// list item nav
import { ListItemNav } from "../Nav/Nav";
import Flex from "../../component/components/flex/Flex";
const Header = () => {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(LoginContext);
  const { cout, cart, order, total, removeProduct } = useContext(CartContext);

  const [isHeader, setIsHeader] = useState(false);
  // moblie
  const [isMobile, setIsMobile] = useState(false);
  // show sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLogout, setIsShowLogout] = useState(false);
  const [hiddenLoginModal, setHiddenLoginModal] = useState(true);
  const { removeAllProducts } = useContext(CartContext);
  const handleLogout = useCallback(() => {
    logout(user.name);
    toast.success("Logout success");
    setIsShowLogout(false);
    removeAllProducts();
    navigate("/");
  }, [logout, user.name, navigate]);

  const toggleLogoutMenu = useCallback(() => {
    setIsShowLogout((prev) => !prev);
  }, []);

  const openLoginModal = useCallback(() => {
    setHiddenLoginModal(!hiddenLoginModal);
  }, [hiddenLoginModal]);

  // get user from localstorages
  useEffect(() => {
    const valueUser = localStorage.getItem("name");
    if (valueUser) {
      user.name = valueUser;
      login(valueUser);
    }
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    }
  }, []);

  window.addEventListener("scroll", (item) => {
    if (window.scrollY >= 50) {
      setIsHeader(true);
      return () => {
        window.removeEventListener("scroll");
      };
    } else if (window.scrollY <= 100) {
      setIsHeader(false);
      return () => {
        window.removeEventListener("scroll");
      };
    }
  });
  const Sidebar = () => {
    return (
      <div
        hidden={showSidebar}
        className="top-[50px] left-0 fixed bg-white w-[60%] h-[100vh] z-[100]"
      >
        <ListItemNav setShowSidebar={setShowSidebar} />
      </div>
    );
  };
  return (
    <div
      className={`w-full bg-main text-black h-full border-b-[0.5px] flex items-center justify-center z-[90]`}
    >
      {isMobile ? (
        <div className="w-full h-[60px] flex items-center justify-center border-b-[1px] transition-transform">
          {/* logo and nav */}
          <div
            className={`${
              isHeader
                ? "shadow-lg border-b-[0.5px] border-[#888] bg-bg z-90 fixed top-0 right-0 transition-all duration-300 "
                : ""
            }   right-0  w-full h-[60px] bg-bg  flex items-center justify-between px-full  z-[90]`}
          >
            {/* sidebar control */}
            <div
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <BsList className="text-[1.6rem] cursor-pointer" />
            </div>
            {/* logo */}
            <a
              href="/"
              className="text-[20px]  md:text-[25px] lg:text-[30px] font-bold italic font-serif tracking-[5px]"
            >
              <span className="text-gray-400 text-[1.1rem]">N</span>
              <span className="text-red-500 text-[2.1rem] italic underline">
                T
              </span>
              A
            </a>

            {/* cart */}
            <div
              className="cart relative "
              onClick={() => {
                navigate("/cart");
              }}
            >
              <AiOutlineShoppingCart className="text-[29px] cursor-pointer" />
              <div className="cursor-pointer absolute bottom-[-4px] right-[16px] bg-red text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                {cout}
              </div>
            </div>
          </div>
          <Sidebar />
          {/* over lay */}
          <div
            hidden={showSidebar}
            onClick={() => {
              setShowSidebar(true);
            }}
            className="z-[99] top-0 right-0 left-0 fixed bg-[rgba(0,0,0,0.4)] w-full h-[100vh]"
          ></div>
        </div>
      ) : (
        <div
          // className={`w-full bg-bg text-black  lg:px-full xl:px-0 h-[110px] flex flex-col justify-center items-center ${
          //   isHeader ? "bg-bg z-[200] fixed top-0 shadow-xl" : ""
          // } `}
          className=" w-full bg-bg text-black lg:px-full xl:px-0 h-[110px] flex flex-col justify-center items-center "
        >
          <div className="z-[70] w-full h-[45%] flex items-center justify-center">
            <div className="w-full max-w-[1200px] h-[54px] px-full xl:px-0">
              <Flex
                justify="between"
                className="w-full h-full border-b-[1px] z-10"
              >
                <Flex justify="start">
                  <div
                    onClick={() => {
                      window.location = "tel:0961563714";
                    }}
                    className="cursor-pointer hover:underline decoration-[#999]"
                  >
                    <span className="text-red-500 text-[1rem] font-semibold text-red">
                      Hotline:
                    </span>
                    <span className="italic pl-[4px] text-gray-500 text-[0.9rem]">
                      0961563714
                    </span>
                  </div>
                  <div className="mx-half hidden md:block">|</div>
                  <h4 className="text-gray-600 cursor-pointer hidden md:block">
                    cskh@nta.com.vn
                  </h4>
                </Flex>
                <div className="h-full flex items-center justify-center">
                  {user && user.name ? (
                    <div className="relative">
                      <div className="flex items-center justify-center">
                        <FaRegUserCircle
                          className="text-[2rem] mr-half cursor-pointer"
                          onClick={toggleLogoutMenu}
                        />
                        <h2 className="w-full select-none h-[70%] py-[4px] md:py-[8px] btn__logout capitalize text-red-500 border-[1px] flex items-center justify-center">
                          {user.name}
                        </h2>
                      </div>
                      {
                        <div
                          className={`${
                            showLogout
                              ? "translate-y-[0%] opacity-100 visible "
                              : "translate-y-[20%] opacity-0 invisible "
                          }z-[160] absolute bottom-[-84px] shadow-gray-500 transition-all duration-300 shadow-3xl right-0 bg-[#FEBD68] w-[200px] h-[80px] flex-col items-center justify-center px-[12px] py-[8px]`}
                        >
                          <button className="w-[100%] py-[4px] h-[30px] border-[1px] border-[#FEBD68] bg-white my-[4px] p-[4px] text-gray-500">
                            Settings
                          </button>
                          <button
                            onClick={handleLogout}
                            className="w-[100%] h-[30px] border-[0px] border-[#999] bg-white p-[4px] text-gray-500"
                          >
                            Logout
                          </button>
                        </div>
                      }
                    </div>
                  ) : (
                    <div className="w-full h-[100%] flex items-center justify-start">
                      <span className="mr-half text-gray-700">Hello!</span>
                      <div
                        onClick={openLoginModal}
                        className="w-full h-full flex items-center justify-center px-[9px] py-[4px] border-l-[1px] border-r-[1px] bg-white text-red px-half cursor-pointer hover:text-main hover:bg-slate-100"
                      >
                        Login
                      </div>
                    </div>
                  )}
                </div>
              </Flex>
              <ToastContainer />

              <ModalLogin
                hidden={hiddenLoginModal}
                setHiddenLoginModal={setHiddenLoginModal}
              />
              <OverLay
                hidden={hiddenLoginModal}
                onClick={() => {
                  setHiddenLoginModal(true);
                }}
              />
            </div>
          </div>
          {/* logo and nav */}
          <div className="w-full h-[55%] max-w-[1200px] flex items-center justify-between px-full lg:px-0  z-[60]">
            {/* logo and selec region*/}
            <Flex justify="start" className="h-full">
              {/* logo */}
              <a
                href="/"
                className="text-[20px] md:text-[25px] lg:text-[2rem] font-bold italic font-serif tracking-[5px] mr-full"
              >
                N
                <span className="text-red text-[2.1rem] italic underline">
                  T
                </span>
                A
              </a>
            </Flex>
            {/* navigation */}
            <Flex justify="center" className="flex-1 w-full h-full ">
              <Nav />
            </Flex>
            <div className="h-full flex items-center justify-start">
              <div className="header__order h-full flex items-center justify-center mr-half relative border-l-[1px] border-r-[1px] px-full">
                <div>
                  <GrMoney className="mr-[4px] text-[1.6rem]" />
                  <div className="absolute bottom-[0px] right-[15px] bg-red text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                    {order}
                  </div>
                </div>
                {/* hover */}
                <div className="header__order__popup bg-bg shadow-xl min-w-[30vw] w-[100%] h-[100%] text-center absolute right-0 bottom-[-100%] text-sub pt-half">
                  {order} orders have been placed successfully !
                </div>
              </div>
              {/* cart */}
              <div className="header__cart w-full h-full relative ">
                {/* icon cart */}
                <div
                  className="cursor-pointer flex items-center justify-center relative h-full border-l-[1px] border-r-[1px] px-full  "
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <AiOutlineShoppingCart
                    onClick={() => {
                      navigate("/cart");
                    }}
                    className="text-[1.8rem] cursor-pointer"
                  />
                  <div className=" absolute bottom-[0px] right-[15px] bg-red text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                    {cout}
                  </div>
                </div>
                {/* hover cart */}
                <Flex
                  justify="center"
                  className="header__cart__popup bg-bg shadow-xl min-w-[30vw] w-[100%] h-auto flex-col absolute   right-0 top-[100%] text-sub p-half"
                >
                  <h4 className="border-b-[1px] w-full px-full">
                    {cout} item in cart
                  </h4>
                  {/* list product added to cart */}
                  <ul className="w-full h-[60vh] overflow-y-scroll list-none text-start px-half border-b-[1px]">
                    {cart.map((product) => {
                      return (
                        <li
                          key={product.id}
                          className="flex items-center  justify-start w-full h-[62px] my-half bg-white"
                        >
                          <div className=" min-w-[20%]">
                            <img
                              alt="img"
                              src={product.images}
                              className="w-[52px] h-[52px] object-cover"
                            />
                          </div>
                          <div className=" min-w-[60%] w-full text-[0.95remrem] text-black ml-half  ">
                            <h6 className="w-[100%] text-ellipsis overflow-hidden whitespace-nowrap">
                              {product.title}
                            </h6>
                            <h6 className="text-[0.9rem] text-sub pt-[4px]">
                              ${product.price}
                            </h6>
                          </div>
                          <div
                            className="w-[20%] flex items-center justify-center cursor-pointer"
                            onClick={() => {
                              removeProduct(product.id);
                            }}
                          >
                            <MdCancelPresentation className="w-full  text-[1.1rem]" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <h4 className="text-start block pt-half">Total: ${total}</h4>
                  <button
                    onClick={() => {
                      navigate("/cart/buy");
                    }}
                    className="button min-w-[80%] text-[0.8rem] bg-main text-sub mt-half text-center"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => {
                      navigate("/cart");
                    }}
                    className="button min-w-[80%] bg-red text-[0.8rem] text-white mt-half text-center"
                  >
                    View Cart
                  </button>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
