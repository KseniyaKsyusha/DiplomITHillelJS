import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./containers/Login";
import Products from "./containers/Products";
import Preview from "./containers/Preview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Products />
    {/* <Preview /> */}
  </React.StrictMode>
);
