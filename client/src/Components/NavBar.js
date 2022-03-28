import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-bar">
      <NavLink to="/" >Recipes</NavLink>
      <NavLink to="/pantry" >Pantry</NavLink>
      <NavLink to="/shoppinglist" >Shopping List</NavLink>
    </div>
  );
}

export default NavBar;