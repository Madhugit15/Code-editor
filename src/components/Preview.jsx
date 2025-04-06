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
    <div className="preview">
      <div className="sun-editor-editable ">
        <div dangerouslySetInnerHTML={{ __html: Content }} />
      </div>
    </div>
  );
}

export default Preview;
