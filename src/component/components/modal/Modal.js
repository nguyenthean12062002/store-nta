import React from "react";
const Modal = ({ children, isHidden, title, onClick, className }) => {
  const props = { onClick };
  return (
    <div
      className={`w-full h-full  fixed top-0 right-0 left-0 m-auto  bg-white shadown-4xl z-[90] ${className} `}
      hidden={isHidden}
      {...props}
    >
      <h4 className="text-center py-half text-red text-[1.1rem] capitalize mb-full ">
        {title}
      </h4>
      {/*content modal search*/}
      <div className="text-[1rem] px-full">{children}</div>
    </div>
  );
};
export default Modal;
