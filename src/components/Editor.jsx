import React, { useContext, useRef } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";
import { htmlCode } from "./HtmlEditor";

const Editor = () => {
  const { Editor, onEditorChange, Content } = useContext(htmlCode);
  const editorRef = useRef(null);

  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
  };

  //CUSTOM FONTWEIGHT//

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
    <>
      {Editor && (
        <div
          style={{
            width: "90%",
            margin: "auto",
            height: "100%",
            borderBottom: "none",
            transform: "translateX(0)",
          }}
        >
          <div style={{ height: "100%" }}>
            <SunEditor
              getSunEditorInstance={getSunEditorInstance}
              defaultValue={Content}
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
                fontSize: [
                  8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28,
                  36, 48, 72,
                ],
                font: [
                  "Roboto",
                  "Open Sans",
                  "Lato",
                  "Montserrat",
                  "Oswald",
                  "Poppins",
                  "Raleway",
                  "Noto Sans",
                  "Roboto Condensed",
                  "PT Sans",
                  "Source Sans Pro",
                  "Nunito",
                  "Work Sans",
                  "Ubuntu",
                  "Fira Sans",
                  "Inter",
                  "Mukta",
                  "Titillium Web",
                  "Quicksand",
                  "Karla",
                ],

                resizeEnable: true,
                attributesBlacklist: {
                  //used to prevent unwanted style addition in the html code which is rendered by the content pasted in the editor
                  strong: "style",
                  div: "style",
                  h1: "style",
                  h2: "style",
                  h3: "style",
                  h4: "style",
                  h5: "style",
                  h6: "style",
                  figure: "style",

                  ul: "style",
                  ol: "style",
                  li: "style",
                },

                attributesWhitelist: {
                  span: "style",
                  //if we want to add styles to an element we can write it using span tag
                },
                TagsWhitelist: "span",

                //used for controlling which tags should be seen HTML PAGE while pasting the content in the editor
                pasteTagsWhitelist:
                  "p|div|b|strong|i|u|em|u|s|strike|del|sub|sup|img|a|h1|h2|h3|h4|ul|ol|li|table|tr|td|th|thead|tbody|figcaption|figure|iframe|video",
              }}
              onChange={onEditorChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Editor;
