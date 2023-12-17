import React from "react";

const OverLay = ({ hidden, props }) => {
  return (
    <div
      hidden={hidden}
      className="z-[80] cursor-pointer w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]"
    ></div>
  );
};

export default OverLay;
