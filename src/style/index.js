import React from "react";
// css thư viện thông báo react toastifys
import "react-toastify/dist/ReactToastify.css";

import "./globalstyle.scss";
const GlobalStyles = ({ children }) => {
  return <div>{children}</div>;
};

export default GlobalStyles;
