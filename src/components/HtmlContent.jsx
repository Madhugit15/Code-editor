import React, { useContext, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";

import { html as beautifyHtml } from "js-beautify";
import { htmlCode } from "../App";

import "ace-builds/src-noconflict/theme-textmate";

import "ace-builds/src-noconflict/ext-language_tools";

import workerHtmlUrl from 'ace-builds/src-noconflict/worker-html?url';

ace.config.setModuleUrl('ace/mode/html_worker', workerHtmlUrl);


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
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}

export default HtmlEditor;
