import Editor from "./editor";
import "./editor/editor.override.css";
import "./editor/header/header.css";

function App() {
  function handleEditorClick() {
    console.log("Editor is clicked"); //sample code
  }
  function handleHtmlClick() {
    console.log("Html is clicked"); //sample code
  }
  function handleEditorChange(content) {
    console.log(content);
  }
  function handleHtmlChange(Htmlcontent) {
    console.log(Htmlcontent);
  }
  return (
    <>
      <div className="editor_heading">
        <h2>HTML Shifter</h2>
        <p>Transform Word into HTML code</p>
      </div>

      {/* Editor component  */}

      <Editor showHeader={true}>
        <Editor.word
          onChange={handleEditorChange}
          onClick={handleEditorClick}
        />
        <Editor.html onChange={handleHtmlChange} onClick={handleHtmlClick} />
        <Editor.preview />
      </Editor>
    </>
  );
}

export default App;
