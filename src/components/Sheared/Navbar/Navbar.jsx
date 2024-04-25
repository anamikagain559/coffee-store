import React from "react";
import logo from "./../../../../public/images/more/logo1.png"
const Navbar = () => {
  return (
    <div className="h-[120px] flex justify-center align-center " style={{backgroundImage: 'url(./../../../../public/images/more/nav.jpg)'}}>
      <div className="flex gap-3 justify-center mt-3">
        <img src={logo} alt="" className="w-[75px] h-[90px]" />
        <h1  className="text-6xl font-rancho mt-3 text-white">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Navbar;
