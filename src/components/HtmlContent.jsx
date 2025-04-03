import React, { useContext, useEffect, useRef } from "react";
import { htmlCode } from "../App";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./navbar.css";

function HtmlContent() {
  const { Content } = useContext(htmlCode);
  const codeRef = useRef(null);

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginBottom: "25px",
        overflowY: "auto",
      }}
    >
      <SyntaxHighlighter
        language="html"
        showLineNumbers
        wrapLongLines
        customStyle={{
          borderRadius: "5px",
          backgroundColor: "#f4f4f4",
          
          height:"500px",
          whiteSpace:"pre-wrap",
          wordBreak:"break-word"
        }}
      >
        {Content}
      </SyntaxHighlighter>
      
    </div>
  );
}

export default HtmlContent;
