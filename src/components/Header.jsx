import React, { useState, useContext } from "react";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "./Menu";
import MyOrder from "@containers/MyOrder";
import { AppContext } from "../context/AppContext";
const Header = () => {
  const { state } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrders(false);
  };
  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
    setToggle(false);
  };
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            email@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={shoppingCart} alt="shopping cart" />
            <div>{state.cart.length > 0 ? state.cart.length : 0}</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
