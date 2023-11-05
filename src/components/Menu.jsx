import React from "react";
import { Link, NavLink } from "react-router-dom";
// import './assets/css/style.css'
function Menu() {
  return (
    <div>
      <ul>
        <li><NavLink className={({isActive})=>isActive?'activeItem':'pendingItem'} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'activeItem':'pendingItem'}to='/product'>Product</NavLink></li>
        <li><NavLink  className ={({isActive})=>isActive?'activeItem':'pendingItem'}to='/profile'>Profile</NavLink></li>
      </ul>
    </div>
  );
}

export default Menu;
