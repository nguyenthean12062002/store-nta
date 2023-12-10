import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import ChatModal from "./ChatModal";
const Chats = () => {
  const [show, setShow] = useState(true);

  return (
    <div className=" z-100 ">
      <div
        className="w-full pt-[30px] cursor-pointer border-transparent	border-[1px] hover:border-[1px] hover:border-[#888]"
        onClick={() => {
          setShow(!show);
        }}
      >
        {/* icon */}
        <div className=" relative">
          <AiOutlineMessage className="text-[3rem] ml-[22px] " />
          <h5 className="text-white bg-red-300 w-[20px] h-[20px] rounded-full flex items-center justify-center absolute top-[30px] left-[50px]">
            1
          </h5>
        </div>
        <h3 className="ml-[42px] font-bold text-gray-500">Contact us</h3>
      </div>
      <div className="absolute w-[70%] left-[42px] md:w-[50%] lg:w-[40%] z-10 transition-all duration-300 ">
        <ChatModal isShow={show} />
      </div>
    </div>
  );
};

export default Chats;