import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import Navbar from "./Navbar";

//Context api for global state management
export const htmlCode = createContext();

function HtmlEditor({ children, showNav = true, onChange, onClick }) {
  const [Content, setContent] = useState(() => {
    return localStorage.getItem("items") || ""; //get the content stored in local storage
  });

  useEffect(() => {
    localStorage.setItem("items", Content); // stores the content which changes during onchange event in the local storage
    if (onChange) {
      onChange(Content);
    }
  }, [Content, onChange]);

  function changeContent(content) {
    if (content) {
      setContent(content);
    }
  }
  function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <>
      <div className="editor_heading">
        <h2>Online Text Editor</h2>
      </div>
      <htmlCode.Provider value={{ Content, setContent, changeContent }}>
        <BrowserRouter>
          {showNav && <Navbar />}
          <div
            style={{
              height: "500px",
              display: "flex",
              flexDirection: "column",
              paddingBottom: "30px",
            }}
            onClick={handleClick}
          >
            {children}
          </div>
        </BrowserRouter>
      </htmlCode.Provider>
    </>
  );
}

export default HtmlEditor;
