import React, { useState, useContext, useEffect } from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Nav from "../Nav/Nav";
import { BsList } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";

//cart context
import { CartContext } from "../../component/cart/CartContext";
// login context
import { LoginContext } from "../../component/login/LoginProvider";
// list item nav
import { ListItemNav } from "../Nav/Nav";
import Flex from "../../component/components/flex/Flex";
const Header = (props) => {
  const navigate = useNavigate();
  const { user, login } = useContext(LoginContext);
  const [isHeader, setIsHeader] = useState(false);
  // moblie
  const [isMobile, setIsMobile] = useState(false);
  // show sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const { cout } = useContext(CartContext);
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
    } else if (window.scrollY <= 100) {
      setIsHeader(false);
    }
  });
  const Sidebar = () => {
    return (
      <div
        hidden={showSidebar}
        className="top-[50px] left-0 fixed bg-white w-[60%] h-[100vh] z-[100]"
      >
        <ListItemNav />
      </div>
    );
  };
  return (
    <div
      className={`w-full bg-bg h-full border-b-[0.5px] flex items-center justify-center z-[90]`}
    >
      {isMobile ? (
        <div className=" w-full h-[60px] flex items-center justify-center border-b-[1px] transition-transform	">
          {/* logo and nav */}
          <div
            className={`${
              isHeader
                ? "shadow-lg border-b-[0.5px] border-[#888] bg-main z-90 fixed top-0 right-0 transition-all duration-300 "
                : ""
            }   right-0  w-full h-[60px]  flex items-center justify-between px-full  z-[90]`}
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
              className="cart relative"
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
          className={`w-full bg-bg  lg:px-full xl:px-0 h-[60px] flex justify-center items-center ${
            isHeader ? "bg-bg z-[200] fixed top-0 shadow-xl" : ""
          } `}
        >
          {/* logo and nav */}
          <div
            className={`${
              isHeader
                ? " fixed top-0  transition-opacity duration-300 shadown-xl md:px-full lg:px-0"
                : ""
            }     w-full h-[60px] max-w-[1200px] flex items-center justify-between px-full lg:px-0  z-[60]`}
          >
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
            {/* giỏ hàng và tiền có trong tài khoản */}
            <div className="h-full flex items-center justify-start">
              {/* tiền có trong ví */}
              <div className="h-full flex items-center justify-center mr-half relative border-l-[1px] border-r-[1px] px-full">
                <GrMoney className="mr-[4px] text-[1.6rem]" />
                <div className="absolute bottom-[0px] right-[15px] bg-red text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                  0
                </div>
              </div>
              {/* cart */}
              <div
                className="cart cursor-pointer flex items-center justify-center relative h-full border-l-[1px] border-r-[1px] px-full  "
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <AiOutlineShoppingCart className="text-[1.8rem] cursor-pointer" />
                <div className=" absolute bottom-[0px] right-[15px] bg-red text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                  {cout}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
