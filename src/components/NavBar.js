import React from "react";
import { NavLink } from "react-router-dom";

// Add basic styling for NavLinks
const linkStyles = {
  display: "inline-block",
  width: "90px",
  padding: "25px",
  margin: "0  6px 6px",
  background: "Red",
  textDecoration: "animationiteration",
  color: "white",
  Text:"canplay",
};

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Home</NavLink>
      <NavLink to="/Form" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Form</NavLink>
      <NavLink to="/ContactUs" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Contact </NavLink>
    </div>
  )
}

export default NavBar;