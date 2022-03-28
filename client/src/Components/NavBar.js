import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className='btn-group d-flex'>
      <NavLink className="btn btn-primary" to="/" >Recipes</NavLink>
      <NavLink className="btn btn-primary" to="/pantry" >Pantry</NavLink>
      <NavLink className="btn btn-primary" to="/shoppinglist" >Shopping List</NavLink>
    </nav>
  );
}

export default NavBar;