import React from "react";
import Logo from "./Images/logo.jpg";
const Header = () => {
  return (
    <div className="head">
      <img style={{ height: "90%" }} src={Logo} alt="logo" />
      <h1>CyLists</h1>
    </div>
  );
};

export default Header;
