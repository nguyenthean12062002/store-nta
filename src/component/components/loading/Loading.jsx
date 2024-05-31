import React from "react";
import "./loading.scss";
const Loading = () => {
  return (
    <div className="wrapper__loading">
      <div className="loading">
        <svg
          className="spinner"
          width="40px"
          height="40px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="path"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
