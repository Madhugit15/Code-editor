import React, { Fragment } from "react";
import { useContext } from "react";
import "suneditor/dist/css/suneditor.min.css";
import "suneditor/dist/css/suneditor.min.css";
import "./navbar.css";
import { htmlCode } from "./HtmlEditor";

function Preview({ value }) {
  const { Preview } = useContext(htmlCode);
  return (
    <Fragment>
      {Preview && (
        <div
          className="preview"
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <div
            className="sun-editor-editable"
            style={{ flex: 1, overflow: "auto", overflowX: "hidden" }}
          >
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Preview;
