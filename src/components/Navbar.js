import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="col">
        <div className="logo">
          Faserv<span className="text-light">Shop</span>
        </div>
      </div>
      <div className="col">
        <div className="cart">
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            {/* <sup>{(value)=> {
              return value.products.length();
            }}</sup> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
