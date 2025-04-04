import React, { useContext, useEffect } from "react";
import AceEditor from "react-ace";
import { html as beautifyHtml } from "js-beautify";
import { htmlCode } from "../App";


import "ace-builds/src-noconflict/theme-textmate"; 
;

import "ace-builds/src-noconflict/theme-monokai"; 
import "ace-builds/src-noconflict/ext-language_tools"; 

function HtmlEditor() {
  const { Content, changeContent } = useContext(htmlCode);

  // Format HTML content
  const formattedContent = beautifyHtml(Content, {
    indent_size: 2,
    preserve_newlines: true,
    end_with_newline: true,
  });

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <AceEditor
        mode="html"
        theme="textmate"
        value={formattedContent}
        onChange={changeContent}
        name="html_editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="500px"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}

export default HtmlEditor;
