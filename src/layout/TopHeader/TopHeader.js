import React, { useState, useContext } from "react";
import Flex from "../../component/flex/Flex";
// login redux
import { LoginContext } from "../../component/login/LoginProvider";
//
import { useNavigate } from "react-router-dom";
// toast toastify
import { ToastContainer, toast } from "react-toastify";

const TopHeader = () => {
  const [showLogout, setIsShowLogout] = useState(true);
  const { user, logout, login } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <>
      <Flex justify="between" className="px-full border-b-[1px] z-10">
        <div
          onClick={() => {
            window.location = "tel:0961563714";
          }}
          className="cursor-pointer hover:underline decoration-[#999]"
        >
          <span className="text-red-500 text-[1rem] font-semibold">
            Hotline:{" "}
          </span>
          <span className="italic pl-[4px] text-gray-500 text-[0.9rem]">
            0961563714
          </span>
        </div>
        {/* login */}
        <div>
          {user && user.name ? (
            <div className=" relative">
              <h2
                className="w-full select-none h-[70%] p-[4px] py-[4px] md:py-[8px] btn__logout capitalize cursor-pointer border-[1px] border-[#FEBD68] text-gray-500"
                onClick={() => {
                  setIsShowLogout(!showLogout);
                }}
              >
                {user.name}
              </h2>
              <div
                hidden={showLogout}
                className="z-[60] absolute bottom-[-84px] shadow-gray-500 shadow-2xl  right-0  bg-[#FEBD68] w-[200px] h-[80px]  flex-col items-center justify-center px-[12px] py-[8px]"
              >
                <button className="w-[100%] py-[4px] h-[30px] border-[1px] border-[#FEBD68] bg-white my-[4px] p-[4px]">
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
                navigate("/login");
              }}
              className="h-[70%]"
            >
              <span className="w-full h-full p-[4px] py-[4px] border-[1.2px]  mx-[4px] cursor-pointer border-[#FEBD68] hover:bg-slate-100">
                Login
              </span>
            </div>
          )}
        </div>
      </Flex>
      <ToastContainer />
    </>
  );
};

export default TopHeader;
