import  { Fragment,useEffect,useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { createContext } from "react";
import HtmlContent from "./components/HtmlContent";
import Preview from "./components/Preview";
import DOMPurify from "dompurify"

export const htmlCode = createContext()
function App() {
  
const [Content, setContent] = useState(() => {
  return localStorage.getItem("items") || "";
  });
  const sanitizedContent= DOMPurify.sanitize(Content)
  // Update localStorage whenever Content changes
  useEffect(() => {
    localStorage.setItem("items", Content);
  }, [Content]);
  function changeContent(content) {
    if (content) {
      setContent(content);
    }
  }
  return (
    <htmlCode.Provider value={{Content,setContent,changeContent,sanitizedContent}}>
<BrowserRouter>
    <Fragment>
      <Navbar/>
      <Routes>
      <Route  path="/" element={<Editor />}/>
      <Route  path="/html" element={<HtmlContent />}/>
      <Route  path="/preview" element={<Preview/>}/>
      </Routes>
      
    </Fragment>
    </BrowserRouter>
    </htmlCode.Provider>
    
  );
}

export default App;
