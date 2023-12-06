import React from "react";

const Flex = ({ children, justify, px, py, bg, className }) => {
  return (
    <div
      className={`${className} w-full h-full ${bg} flex items-center justify-${justify}  `}
    >
      {children}
    </div>
  );
};

export default Flex;
