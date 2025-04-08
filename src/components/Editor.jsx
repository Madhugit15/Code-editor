import React, { useContext, useRef } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";
import { htmlCode } from "../App";
import "./navbar.css";

const Editor = () => {
  const editorRef = useRef(null);
  const { Content, changeContent } = useContext(htmlCode);
  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
  };

  const fontWeightPlugin = {
    name: "fontWeight",
    display: "submenu",
    title: "Font Weight",

    innerHTML: '<span style="font-weight:bold;font-size:18px"> W </span>',
    add: function (core, targetElement) {
      const listDiv = this.setSubmenu(core);

      core.initMenuTarget(this.name, targetElement, listDiv);
    },
    setSubmenu: function (core) {
      const listDiv = core.util.createElement("div");
      listDiv.className = "se-submenu se-list-layer";

      const weights = ["Default", "100", "300", "400", "500", "700", "900"];
      let list = '<div class="se-list-inner">';
      weights.forEach((weight) => {
        list += `<button type="button" class="se-btn-list" data-value="${weight}" style="font-weight: ${weight};">${weight}</button>`;
      });
      list += "</div>";
      listDiv.innerHTML = list;

      listDiv.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          if (button.innerHTML === "Default") {
            core.nodeChange(null, ["font-weight"], ["span"], true);
          } else {
            const newNode = core.util.createElement("span");
            newNode.style.fontWeight = button.getAttribute("data-value");
            core.nodeChange(newNode, ["font-weight"], null, null);
          }
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
        setContents={Content}
        setDefaultStyle="border-radius:15px"
        height="450"
        setOptions={{
          plugins: allPlugins,
          buttonList: [
            ["undo", "redo", "italic", "underline", "strike"],
            [
              "fontSize",
              "font",
              "formatBlock",
              "fontWeight",
              "fontColor",

              "hiliteColor",

              "lineHeight",
              "link",
              "image",
              "video",
            ],
            ["removeFormat", "horizontalRule", "align", "list"],
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

          charCounter: false,

          attributesBlacklist: {
            strong: "style",
            img: "style",
            figure: "style",
          },

          attributesWhitelist: {
            span: "style",
          },
          TagsWhitelist: "span",

          pasteTagsWhitelist:
            "p|div|b|strong|i|u|em|u|s|strike|del|sub|sup|img|a|h1|h2|h3|h4|ul|ol|li",
        }}
        onChange={(content) => {
          changeContent(content);
        }}
      />
    </div>
  );
};

export default Editor;
