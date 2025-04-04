import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="editor_top_content">
      <div className="editor_heading">
        <h2>ONLINE HTML EDITOR</h2>
      </div>
      <div className="editor_nav">
        <ul>
        <NavLink to="/">  <li> EDITOR </li></NavLink>
        <NavLink to="/html"> <li>HTML</li></NavLink>
        <NavLink to="/preview">   <li>PREVIEW</li></NavLink>
            
            
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
