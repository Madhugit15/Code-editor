import React, { useContext, useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";
import { htmlCode } from "..";



export const WordEditor = () => {
  const { Editor, onEditorChange, Content } = useContext(htmlCode);
  const editorRef = useRef(null);
const [Input,setinput]=useState("#90h456")
  const input=(document.querySelector('._se_color_picker_input'))
  const button= document.querySelector(".se-btn se-tooltip");
  if(button){
    console.log(button)
  }
  if(input){
    input.classList.add("font-color")
    input.classname+="font-color";
    input.value=Input
    console.log(input.value)

    input.addEventListener("change",(e)=>{
setinput(e.target.value)
    })
    
  }
  useEffect(() => {
    const addBorderRadiusInput = () => {
      const dialogBox = editorRef.current?.core?.context?.image?.modal;
      console.log(dialogBox);
      if (!dialogBox) return;

      const imageDialogBody = dialogBox.querySelector(".se-dialog-body");

      // Prevent duplicates
      if (imageDialogBody.querySelector(".border-radius-input")) return;

      // Label
      const label = document.createElement("label");
      label.innerText = "Border Radius";
      label.style.marginRight = "8px";

      // Input
      const input = document.createElement("input");
      input.className = "se-input-form border-radius-input";
      input.type = "text";
      input.style.width = "100%";

      // Get saved value or fallback
      const savedRadius = localStorage.getItem("lastUsedBorderRadius") || "0px";
      input.value = savedRadius;
      console.log(savedRadius);

      // Combine into div
      const div = document.createElement("div");
      div.className = "se-dialog-form";
      div.style.marginTop = "10px";
      div.appendChild(label);
      div.appendChild(input);

      imageDialogBody.appendChild(div);

      // Apply on insert
      const insertButton = dialogBox.querySelector(".se-btn-primary");
      insertButton?.addEventListener("click", () => {
        const borderRadius = input.value;
        localStorage.setItem("lastUsedBorderRadius", borderRadius);
        console.log(borderRadius);
        setTimeout(() => {
          const images =
            editorRef.current?.core.context.element.wysiwyg.querySelectorAll(
              "img"
            );
          const latestImage = images?.[images.length - 1];
          if (latestImage) {
            latestImage.style.borderRadius = borderRadius;
            latestImage.style.transition = "border-radius 0.3s";
            editorRef.current?.core.context.element.wysiwyg.dispatchEvent(
              new Event("input")
            );
          }
        }, 0);
      });
    };

    // Wait for image dialog to render
    const checkDialog = setInterval(() => {
      const imageDialog = document.querySelector(".se-dialog-image");

      if (imageDialog) {
        console.log(imageDialog);
        addBorderRadiusInput();
        clearInterval(checkDialog);
      }
    }, 300);

    return () => clearInterval(checkDialog);
  }, []);
  const handleImageUpload = (
    targetImgElement,
    index,
    state,
    imageInfo,
    remainingFilesCount
  ) => {
    if (state === "create") {
      const borderRadius =
        localStorage.getItem("lastUsedBorderRadius") || "0px";
      // Apply border radius to the inserted image
      targetImgElement.style.borderRadius = borderRadius;
      targetImgElement.style.transition = "border-radius 0.3s";
    }
  };
  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;

    //---CUSTOM BORDER RADIUS
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
              setDefaultStyle={`color:${Input}`}
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
              onImageUpload={handleImageUpload}
            />
          </div>
        </div>
      )}
    </>
  );
};
