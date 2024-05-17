import React from "react";

const Flex = ({ children, justify, px, py, bg, className }) => {
  return (
    <div
      className={` ${bg} flex items-center justify-${justify} ${className}   `}
    >
      {children}
    </div>
  );
};

export default Flex;
