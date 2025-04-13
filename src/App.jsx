import Editor from "./components/Editor";
import { Routes, Route } from "react-router-dom";
import Preview from "./components/Preview";
import HtmlContent from "./components/HtmlContent";
import HtmlEditor from "./components/HtmlEditor";

function App() {
  return (
    <>
      <HtmlEditor>
        <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/html" element={<HtmlContent />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </HtmlEditor>
    </>
  );
}

export default App;
