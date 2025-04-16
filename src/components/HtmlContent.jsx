import React, { Fragment, useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html as beautifyHtml } from "js-beautify";
import { htmlCode } from "./HtmlEditor";
import { html } from "@codemirror/lang-html";

import { noctisLilac } from "@uiw/codemirror-theme-noctis-lilac";

import { EditorView } from "@codemirror/view";
import "./navbar.css";
function HtmlContent() {
  const { Html, Content, onHtmlChange } = useContext(htmlCode);

  const formattedContent = beautifyHtml(Content, {
    indent_size: 2,
    preserve_newlines: true,
    end_with_newline: true,
  });

  return (
    <Fragment>
      {Html && (
        <div
          style={{
            width: "90%",
            margin: "auto",
            minHeight: "400px",
            height: "100%",
            border: "1px solid #B1B1B1",
            borderRadius: "4px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CodeMirror
            value={formattedContent}
            extensions={[html(), EditorView.lineWrapping]}
            theme={noctisLilac}
            onChange={(htmlVal) => {
              onHtmlChange(htmlVal);
            }}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLine: true,
              autocompletion: true,
            }}
            style={{ flex: 1, fontFamily: "Poppins, sans-serif" }}
          />
        </div>
      )}
    </Fragment>
  );
}

export default HtmlContent;
