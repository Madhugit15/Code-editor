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
            <li> <NavLink to="/"> EDITOR</NavLink> </li>
            <li><NavLink to="/html">HTML</NavLink></li>
            <li><NavLink to="/">PREVIEW</NavLink></li>
            
            
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
