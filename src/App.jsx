import Editor from "./components/Editor";
import Preview from "./components/Preview";
import HtmlContent from "./components/HtmlContent";
import HtmlEditor from "./components/HtmlEditor";
import { useState, useEffect } from "react";

function App() {
  const [Content, setContent] = useState(() => {
    return localStorage.getItem("items") || ""; //get the content stored in local storage
  });

  useEffect(() => {
    localStorage.setItem("items", Content); // stores the content which changes during onchange event in the local storage
  }, [Content]);

  function handleEditorChange(content) {
    setContent(content);
  }

  function handleHtmlChange(value) {
    setContent(value);
  }

  function handleEditorClick() {
    console.log("Editor is clicked"); //sample code
  }
  function handleHtmlClick() {
    console.log("Html is clicked"); //sample code
  }
  return (
    <>
      <HtmlEditor showNav={true}>
        <Editor
          value={Content}
          onChange={handleEditorChange}
          onClick={handleEditorClick}
        />
        <HtmlContent
          value={Content}
          onChange={handleHtmlChange}
          onClick={handleHtmlClick}
        />
        <Preview value={Content} />
      </HtmlEditor>
    </>
  );
}

export default App;
