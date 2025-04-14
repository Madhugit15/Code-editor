import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html as beautifyHtml } from "js-beautify";
import { htmlCode } from "./HtmlEditor";
import { html } from "@codemirror/lang-html";
import { githubLight } from "@uiw/codemirror-theme-github";
import { EditorView } from "@codemirror/view";
import "./navbar.css";
function HtmlContent() {
  const { Content, changeContent } = useContext(htmlCode);

  const formattedContent = beautifyHtml(Content, {
    indent_size: 2,
    preserve_newlines: true,
    end_with_newline: true,
  });

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        height: "100%",
        border: "1px solid #dadada",
        borderRadius: "0px 0px 4px 4px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <CodeMirror
        value={formattedContent}
        extensions={[html(), EditorView.lineWrapping]}
        theme={githubLight}
        onChange={(value) => changeContent(value)}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          autocompletion: true,
        }}
        style={{ flex: 1,fontFamily: "Poppins, sans-serif", }}
      />
    </div>
  );
}

export default HtmlContent;
