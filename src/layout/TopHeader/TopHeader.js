import React, { useState, useContext, useEffect } from "react";
import Flex from "../../component/flex/Flex";
// login redux
import { LoginContext } from "../../component/login/LoginProvider";
//
import { useNavigate } from "react-router-dom";
// toast toastify
import { ToastContainer, toast } from "react-toastify";
// icon
import { FaRegUserCircle } from "react-icons/fa";
// modal login
import ModalLogin from "../ModalLogin/ModalLogin";
import OverLay from "../OverLay/OverLay";
const TopHeader = () => {
  const [showLogout, setIsShowLogout] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const { user, logout } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.name) {
      setShowLoginModal(true);
    }
  }, [user]);
  return (
    <div className=" z-[50] w-full h-full flex items-center justify-center bg-white ">
      <div className="w-full max-w-[1200px] h-[54px] px-full  xl:px-0">
        <Flex
          justify="between"
          className=" w-full h-full border-b-[1px] z-10  "
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
            {/* cskh */}
            <div className="mx-half hidden md:block">|</div>
            <h4 className="text-gray-600 cursor-pointer hidden md:block">
              cskh@nta.com.vn
            </h4>
          </Flex>
          {/* login */}
          <div className=" h-full flex items-center justify-center">
            {user && user.name ? (
              <div className=" relative">
                <div className="flex items-center justify-center">
                  <FaRegUserCircle
                    className="text-[2rem] mr-half cursor-pointer"
                    onClick={() => {
                      setIsShowLogout(!showLogout);
                    }}
                  />
                  <h2 className="w-full select-none h-[70%]  py-[4px] md:py-[8px] btn__logout capitalize  text-red-500 border-[1px] flex items-center justify-center">
                    {user.name}
                  </h2>
                </div>

                <div
                  hidden={showLogout}
                  className="z-[160] absolute bottom-[-84px] shadow-gray-500 shadow-3xl  right-0  bg-[#FEBD68] w-[200px] h-[80px]  flex-col items-center justify-center px-[12px] py-[8px]"
                >
                  <button className="w-[100%] py-[4px] h-[30px] border-[1px] border-[#FEBD68] bg-white my-[4px] p-[4px] text-gray-500">
                    Settings
                  </button>
                  <button
                    onClick={() => {
                      logout(user.name);
                      toast.success("Logout success");
                      setIsShowLogout(true);
                      navigate("/");
                    }}
                    className="w-[100%]  h-[30px] border-[2px] border-[#999] bg-white p-[4px] text-gray-500"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  setShowLoginModal(!showLoginModal);
                }}
                className="w-full h-[100%] transition-all duration-500 flex items-center justify-start"
              >
                <span className="mr-half text-gray-700">Hello!</span>
                <div className="w-full h-full flex items-center justify-center px-[9px] py-[4px] border-l-[1px] border-r-[1px] transition-all duration-500 bg-white text-red px-half  cursor-pointer  hover:text-main hover:bg-slate-100">
                  Login
                </div>
              </div>
            )}
          </div>
        </Flex>
        <ToastContainer />
        {/* modal login */}
        <div hidden={showLoginModal} className="transition-all duration-300">
          <ModalLogin />
        </div>
        {/* overlay */}
        <div
          hidden={showLoginModal}
          className="transition-all duration-300"
          onClick={() => {
            setShowLoginModal(true);
          }}
        >
          <OverLay />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
