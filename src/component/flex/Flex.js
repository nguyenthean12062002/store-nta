import React from "react";

const Flex = ({ children, justify, px, py, bg, className }) => {
  return (
    <div
      className={`${className}  ${bg} flex items-center justify-${justify}  `}
    >
      {children}
    </div>
  );
};

export default Flex;
