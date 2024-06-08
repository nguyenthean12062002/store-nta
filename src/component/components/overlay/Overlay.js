import React from "react";

const Overlay = ({ children, onClick }) => {
  const props = { onClick };
  return (
    <div
      {...props}
      className="fixed top-0 right-0 bottom-0 left-0 z-[30]  bg-[rgba(0,0,0,0.2)] cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Overlay;
