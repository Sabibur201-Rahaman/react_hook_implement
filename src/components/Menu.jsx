import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/product'>Product</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
      </ul>
    </div>
  );
}

export default Menu;
