import React from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

import Header from "./header";
import "./header/header.css";
import { Preview } from "./preview";
import { HtmlEditor } from "./html.editor";
import { WordEditor } from "./word.editor";

//Context api for global state management
export const htmlCode = createContext();

const Editor = ({ children, showHeader }) => {
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
        {showHeader && <Header />}
        <div className="parent_container">{children}</div>
      </htmlCode.Provider>
    </>
  );
};

Editor.word = WordEditor;
Editor.html = HtmlEditor;
Editor.preview = Preview;

export default Editor;
