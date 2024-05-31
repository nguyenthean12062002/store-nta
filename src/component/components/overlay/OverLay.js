import React from "react";
import "./overlay.scss";
const OverLay = ({ children }, props) => {
  return (
    <div {...props} className="overlay">
      {children}
    </div>
  );
};

export default OverLay;
