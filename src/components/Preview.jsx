import React, { Fragment } from "react";
import { useContext } from "react";
import "suneditor/dist/css/suneditor.min.css";
import "suneditor/dist/css/suneditor.min.css";

import { htmlCode } from "./HtmlEditor";

function Preview() {
  const { Preview, Content } = useContext(htmlCode);
  return (
    <Fragment>
      {Preview && (
        <div className="preview">
          <div className="sun-editor-editable ">
            <div dangerouslySetInnerHTML={{ __html: Content }} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Preview;
