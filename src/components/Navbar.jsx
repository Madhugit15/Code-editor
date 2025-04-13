import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="editor_top_content">
      <div className="editor_nav">
        <ul>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    background: "#006ef4",
                    height: "40px",
                    display: "grid",
                    placeItems: "center",
                  }
                : { color: "#006ef4" }
            }
            to="/"
          >
            <li> EDITOR </li>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    background: "#006ef4",
                    height: "40px",
                    display: "grid",
                    placeItems: "center",
                  }
                : { color: "#006ef4" }
            }
            to="/html"
          >
            <li>HTML</li>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    background: "#006ef4",
                    height: "40px",
                    display: "grid",
                    placeItems: "center",
                  }
                : { color: "#006ef4" }
            }
            to="/preview"
          >
            <li>PREVIEW</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
