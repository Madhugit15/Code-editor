import React from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Navbar from "./Navbar";

//Context api for global state management
export const htmlCode = createContext();

function HtmlEditor({ children, showNav }) {
  const [Editor, setEditor] = useState(true);
  const [Html, setHtml] = useState(false);
  const [Preview, setPreview] = useState(false);

  return (
    <>
      <div className="editor_heading">
        <h2>Online Text Editor</h2>
      </div>
      <htmlCode.Provider
        value={{
          Editor,
          setEditor,
          Html,
          setHtml,
          Preview,
          setPreview,
        }}
      >
        {showNav && <Navbar />}
        <div
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "30px",
          }}
        >
          {children}
        </div>
      </htmlCode.Provider>
    </>
  );
}

export default HtmlEditor;
