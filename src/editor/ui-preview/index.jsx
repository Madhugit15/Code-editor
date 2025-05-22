import React, { Fragment } from "react";
import { useContext } from "react";

import { htmlCode } from "..";

import "suneditor/dist/css/suneditor.min.css";
import "suneditor/dist/css/suneditor.min.css";
import "../editor.override.css";

import styles from "./preview.module.css";

export const UIPreview = () => {
  const { Preview, Content } = useContext(htmlCode);
  return (
    <Fragment>
      {Preview && (
        <div className={styles.previewContainer}>
         
            <div className="sun-editor-editable">
              <div dangerouslySetInnerHTML={{ __html: Content }} />
            </div>
          
        </div>
      )}
    </Fragment>
  );
};
