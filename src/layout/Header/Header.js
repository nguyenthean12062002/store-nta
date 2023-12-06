import React, { useState, useContext, useEffect } from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Nav from "../Nav/Nav";
import { BiMap } from "react-icons/bi";
// search
import Search from "../../component/search/Search";
// sidebar
//import sidebar context
import { SidebarContext } from "../../component/sidebar/SidebarContext";
//cart context
import { CartContext } from "../../component/cart/CartContext";
// login context
import { LoginContext } from "../../component/login/LoginProvider";
const Header = (props) => {
  const navigate = useNavigate();
  const { user, logout, login } = useContext(LoginContext);
  const [isHeader, setIsHeader] = useState(false);
  const { cout } = useContext(CartContext);
  // get user from localstorages
  useEffect(() => {
    const valueUser = localStorage.getItem("name");
    if (valueUser) {
      user.name = valueUser;
      login(valueUser);
    }
  }, []);
  // scrool của thằng header khi cuộn trang
  window.addEventListener("scroll", (item) => {
    if (window.scrollY >= 10) {
      setIsHeader(true);
    } else if (window.scrollY <= 20) {
      setIsHeader(false);
    }
  });

  return (
    <div className=" w-full h-[60px] flex items-center justify-center border-b-[1px]">
      {/* logo and nav */}
      <div
        className={`${
          isHeader
            ? "shadow-md bg-slate-200 z-90 fixed top-0 transition-all duration-300"
            : ""
        }   right-0 min-w-[100vw] w-full h-[60px]  flex items-center justify-between px-[40px]  z-10`}
      >
        {/* logo */}
        <a
          href="/"
          className="text-[20px]  md:text-[25px] lg:text-[30px] font-bold italic font-serif tracking-[5px]"
        >
          N<span className="text-main text-[2.1rem] italic underline">T</span>A
        </a>
        {/* navigation */}
        <div className="flex-1 w-full h-full flex items-center justify-center">
          <Nav />
        </div>
        {/* singin */}

        {/* cart */}
        <div
          className="cart relative"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <AiOutlineShoppingCart className="text-[29px] cursor-pointer" />
          <div className="cursor-pointer absolute bottom-[-4px] right-[16px] bg-red-400 text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
            {cout}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
