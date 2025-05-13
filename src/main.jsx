import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "suneditor/dist/css/suneditor.min.css";
import SunEditor from "suneditor-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
   
  </StrictMode>
);
