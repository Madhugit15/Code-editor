import React, { useContext } from "react";

import { htmlCode } from "..";

import "./header.css";

function Header() {
  const { Editor, Html, Preview, setEditor, setHtml, setPreview } =
    useContext(htmlCode);
  function showEditor() {
    setEditor(true);
    setHtml(false);
    setPreview(false);
  }
  function showHtml() {
    setEditor(false);
    setHtml(true);
    setPreview(false);
  }
  function showPreview() {
    setEditor(false);
    setHtml(false);
    setPreview(true);
  }
  return (
    <div className="editor_top_content">
      <div className="editor_nav">
        <ul>
          <li onClick={showEditor} className={Editor ? "active" : "nav"}>
            WORD
          </li>
          <li onClick={showHtml} className={Html ? "active" : "nav"}>
            HTML
          </li>
          <li onClick={showPreview} className={Preview ? "active" : "nav"}>
            PREVIEW
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
