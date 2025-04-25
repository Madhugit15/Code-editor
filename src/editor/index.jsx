import React from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

import Header from "./header";
import { UIPreview } from "./ui-preview";
import { HtmlEditor } from "./html-editor";
import { WordEditor } from "./word-editor";

import styles from "./editor.module.css";

//Context api for global state management
export const htmlCode = createContext();

const Editor = ({ children, showHeader }) => {
  const [Editor, setEditor] = useState(true);
  const [Html, setHtml] = useState(false);
  const [Preview, setPreview] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
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
          selectedImg,
          setSelectedImg,
        }}
      >
        {showHeader && <Header />}
        <div className={styles.EditorColumns}>
          {React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              (child.type === WordEditor ||
                child.type === HtmlEditor ||
                child.type === UIPreview)
            ) {
              return React.cloneElement(child, { Content, setContent });
            }
            return null;
          })}
        </div>
      </htmlCode.Provider>
    </>
  );
};

Editor.word = WordEditor;
Editor.html = HtmlEditor;
Editor.preview = UIPreview;

export default Editor;
