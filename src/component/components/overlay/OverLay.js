import React, { Children } from "react";
import "./index.scss";
const OverLay = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

export default OverLay;
