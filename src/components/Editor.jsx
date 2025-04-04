import React, { useContext, useRef } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";

import "suneditor/dist/css/suneditor.min.css";


import { htmlCode } from "../App";
import "./navbar.css";


const Editor = () => {
  const editorRef = useRef(null);
  const { Content,changeContent } = useContext(htmlCode);
  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
  };
  
  const fontWeightPlugin = {
    name: "fontWeight",
    display: "submenu",
    title: "Font Weight",

    innerHTML: '<span style="font-weight: bold;">FW</span>',
    add: function (core, targetElement) {
      const listDiv = this.setSubmenu(core);

      core.initMenuTarget(this.name, targetElement, listDiv);
    },
    setSubmenu: function (core) {
      const listDiv = core.util.createElement("div");
      listDiv.className = "se-submenu se-list-layer";

      const weights = ["normal","100", "300", "400", "500", "700", "900", ];
      let list = '<div class="se-list-inner">';
      weights.forEach((weight) => {
        list += `<button type="button" class="se-btn-list" data-value="${weight}" style="font-weight: ${weight};">${weight}</button>`;
      });
      list += "</div>";
      listDiv.innerHTML = list;

      listDiv.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          const newNode = core.util.createElement("SPAN");
          newNode.style.fontWeight = button.getAttribute("data-value");
          core.nodeChange(newNode, ["font-weight"], null, null);
          core.submenuOff();
        });
      });

      return listDiv;
    },
  };
  const allPlugins = [...Object.values(plugins), fontWeightPlugin];

  return (
    <div style={{ width: "90%", margin: "auto", marginBottom: "25px" }}>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        defaultValue={Content}
        defaul
        height="450"
        setOptions={{
          plugins: allPlugins,
          buttonList: [
            ["undo", "redo", "bold", "italic", "underline", "strike"],
            [
              "fontSize",
              "font",
              "formatBlock",
              "fontColor",
              "fontWeight",

              "hiliteColor",
              "align",
              "list",
              "lineHeight",
              "link",
              "image",
              "video",
            ],
            ["removeFormat", "horizontalRule"],
            ["subscript", "superscript", "blockquote"],
          ],
          font: [
            "Arial",
            "Comic Sans MS",
            "Courier New",
            "Impact",
            "Georgia",
            "Tahoma",
            "Trebuchet MS",
            "Verdana",
            "Logical",
            "Salesforce Sans",
            "Garamond",
            "Sans-Serif",
            "Serif",
            "Times New Roman",
            "Helvetica",
          ],
          placeholder: "Start typing here...",
          charCounter: false,
         
          attributesWhitelist: {
            span: "style",
          },
          tagsWhitelist: "span|p|div|b|i|u|strong|em|u|s|strike|del|sub|sup",
        }}
        onChange={(content)=>{changeContent(content)}}
      />
      
    </div>
  );
};

export default Editor;
