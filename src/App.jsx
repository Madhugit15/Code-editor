import  { Fragment,useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { createContext } from "react";
import HtmlContent from "./components/HtmlContent";

export const htmlCode = createContext()
function App() {
   const[Content,setContent]=useState()
  return (
    <htmlCode.Provider value={{Content,setContent}}>
<BrowserRouter>
    <Fragment>
      <Navbar/>
      <Routes>
      <Route  path="/" element={<Editor />}/>
      <Route  path="/html" element={<HtmlContent />}/>
      </Routes>
      
    </Fragment>
    </BrowserRouter>
    </htmlCode.Provider>
    
  );
}

export default App;
