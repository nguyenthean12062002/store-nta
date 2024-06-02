import React, { useState, useContext, useCallback } from "react";
import Flex from "../../component/components/flex/Flex";
import { LoginContext } from "../../component/login/LoginProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";
import ModalLogin from "../ModalLogin/ModalLogin";
import OverLay from "../OverLay/OverLay";
import { CartContext } from "../../component/cart/CartContext";
const TopHeader = () => {
  const [showLogout, setIsShowLogout] = useState(false);
  const [hiddenLoginModal, setHiddenLoginModal] = useState(true);
  const { user, logout } = useContext(LoginContext);
  const { removeAllProducts } = useContext(CartContext);
  const navigate = useNavigate();
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

  return (
    <div className="z-[50] w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-[1200px] h-[54px] px-full xl:px-0">
        <Flex justify="between" className="w-full h-full border-b-[1px] z-10">
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
  );
};

export default TopHeader;
