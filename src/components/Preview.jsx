import React from "react";
import { useContext } from "react";
import { htmlCode } from "../App";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "suneditor/dist/css/suneditor.min.css";

import "./navbar.css";
function Preview() {
  const { Content } = useContext(htmlCode);
  return (
    <div
      className="preview"
      style={{ flex: 1, display: "flex", flexDirection: "column" }}
    >
      <div
        className="sun-editor-editable"
        style={{ flex: 1, overflow: "auto" }}
      >
        <div dangerouslySetInnerHTML={{ __html: Content }} />
      </div>
    </div>
  );
}

export default Preview;
