import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "./images/logo.png";
import cart from "./images/cart.png";
import menu from "./images/menu.png";
import image1 from "./images/image1.png";

const Header = () => {
  return (
    <div class="header">
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <NavLink to="/Home" activeClassName="active">
              <img src={logo} width="125px" />
            </NavLink>
          </div>

          <nav>
            <ul id="MenuItems">
              <li>
                <NavLink to="/Home" activeClassName="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/Categories" activeClassName="active">
                  Let's Shop
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink to="/CartItems" activeClassName="active">
            <img className="cart-logo" src={cart} width="30px" height="30px" alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
