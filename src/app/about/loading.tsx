import React from "react";
import "../loader/loader.css";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loading;
