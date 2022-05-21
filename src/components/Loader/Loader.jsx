import React from "react";
import "./loader.css";
import reactDom from "react-dom";

export const Loader = () => {
  return reactDom.createPortal(
    <div className="overlay">
      <div className="loader"></div>
    </div>,
    document.getElementById("loader-root")
  );
};
