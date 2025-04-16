import React from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Navbar from "./Navbar";
import "./navbar.css"

//Context api for global state management
export const htmlCode = createContext();

function HtmlEditor({ children, showNav }) {
  const [Editor, setEditor] = useState(true);
  const [Html, setHtml] = useState(false);
  const [Preview, setPreview] = useState(false);
  const [Content, setContent] = useState(() => {
    return localStorage.getItem("items") || ""; //get the content stored in local storage
  });

  useEffect(() => {
    localStorage.setItem("items", Content); // stores the content which changes during onchange event in the local storage
  }, [Content]);

  function onEditorChange(content) {
    setContent(content);
  }

  function onHtmlChange(value) {
    setContent(value);
  }
  return (
    <>
      <div className="editor_heading">
        <h2>HTML Shifter</h2>
        <p>Transform Word into HTML code</p>
      </div>
      <htmlCode.Provider
        value={{
          Content,
          setContent,
          Editor,
          setEditor,
          Html,
          setHtml,
          Preview,
          setPreview,
          onEditorChange,
          onHtmlChange,
        }}
      >
        {showNav && <Navbar />}
        <div
          className="parent_container"
        >
          {children}
        </div>
      </htmlCode.Provider>
    </>
  );
}

export default HtmlEditor;
