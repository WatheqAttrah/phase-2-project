import React from "react";
import { NavLink } from "react-router-dom";

// /* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "40px",
  padding: "16px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Home</NavLink>
      <NavLink to="/Form" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Form</NavLink>
    </div>
  )
}

export default NavBar;

