import Editor from "./components/Editor";
import Preview from "./components/Preview";
import HtmlContent from "./components/HtmlContent";
import HtmlEditor from "./components/HtmlEditor";

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
      <HtmlEditor showNav={true} >
        <Editor onChange={handleEditorChange} onClick={handleEditorClick} />
        <HtmlContent onChange={handleHtmlChange} onClick={handleHtmlClick} />
        <Preview />
      </HtmlEditor>
    </>
  );
}

export default App;
