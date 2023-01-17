import React from "react";
import logo from "./Logo.jpg";

function Header() {
  return (
    <header>
      <img style={{ width: 200, height: 40, borderRadius:20 }} src={logo} alt="Logo"></img>
    </header>
  );
}

export default Header;
