import React from "react";

const OverLay = ({ className, hidden, onClick }) => {
  const props = { onClick };
  return (
    <div
      hidden={hidden}
      className={`z-[86] cursor-pointer w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] ${className}`}
      {...props}
    ></div>
  );
};

export default OverLay;
