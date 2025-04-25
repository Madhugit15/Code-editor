import React, { useContext, useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";
import { htmlCode } from "..";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";

export const WordEditor = () => {
  const { Editor, onEditorChange, Content } = useContext(htmlCode);
  const editorRef = useRef(null);

  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;

    //---CUSTOM BORDER RADIUS
    const addBorderRadiusInput = () => {
      let selectedImg = null;
      const dialogBox = sunEditor.core.context.image.modal;

      const imgParentDialog = dialogBox.querySelector("._se_tab_content_image");

      const imageDialogBody = imgParentDialog.querySelector(".se-dialog-body");

      // Create label and input
      const label = sunEditor.util.createElement("label");
      label.innerText = "Border-Radius";
      label.style.marginRight = "8px";

      const input = sunEditor.util.createElement("input");
      input.className = "se-input-form border-radius-input";
      input.type = "text";
      input.value = "0px";
      input.style.width = "100%";

      // Create container div and append label and input
      const newDiv = sunEditor.util.createElement("div");
      newDiv.className = "se-dialog-form";
      newDiv.style.marginTop = "10px";
      newDiv.appendChild(label);
      newDiv.appendChild(input);

      // Append the new div to the dialog body
      imageDialogBody.appendChild(newDiv);

      document.addEventListener("click", (event) => {
        if (event.target.tagName === "FIGURE") {
          const img = event.target.querySelector("img");
          selectedImg = img;
          input.value = selectedImg.style.borderRadius;
        }
      });

      // Modify the insert function to include border radius
      const insertButton = dialogBox.querySelector(".se-btn-primary");
      if (insertButton) {
        insertButton.addEventListener("click", () => {
          const borderRadius = input.value;

          if (selectedImg && selectedImg.tagName === "IMG" && borderRadius) {
            selectedImg.style.borderRadius = borderRadius;
          }
        });
      }
    };
    const imageButton = document.querySelector(".se-dialog-image");
    if (imageButton) {
      setTimeout(addBorderRadiusInput, 10); // Delay to ensure dialog is rendered
    }
  }; //---

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
            width: "100%",
            height: "100%",
            borderBottom: "none",
            transform: "translateX(0)",
          }}
        >
          <div style={{ height: "100%" }}>
            <SunEditor
              getSunEditorInstance={getSunEditorInstance}
              defaultValue={Content}
              height="100%"
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
