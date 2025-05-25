import React, { useContext, useRef, useEffect } from "react";
import { htmlCode } from "..";
import styles from "./preview.module.css";
import { IoInformationCircleOutline } from "react-icons/io5";

export const UIPreview = () => {
  const { Preview, Content } = useContext(htmlCode);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (Preview && iframeRef.current) {
      const doc =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow.document;

      doc.open();
      doc.write(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Include all relevant styles -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suneditor/dist/css/suneditor.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suneditor/dist/css/suneditor-contents.min.css">
      <link rel="stylesheet" href="./">
      
      <!-- Optional: Include Google Fonts or other custom fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

      <style>
        body {
          margin: 0;
          padding: 0 !important;
          font-weight:400;
            }

        .sun-editor-editable {
         font-family: 'Poppins', sans-serif;
         background-color: white;
         font-size: 13px;
         color:#000000;
         line-height: 1.5;
         box-sizing: border-box;
         padding: 14px;
         overflow-x: hidden;
         overflow: auto; 
          }

        .sun-editor-editable p {
          margin: 0px;
        }

        .sun-editor-editable img {
          overflow: scroll ;
        }
      </style>
    </head>
    <body>
       <div class="sun-editor-editable">
         ${Content}
       </div>
     
      <script>
          document.querySelectorAll("a").forEach(a=> a.setAttribute('target','_blank'))
      </script>
    </body>
  </html>
`);
      doc.close();
    }
  }, [Preview, Content]);

  return (
    <>
      {Preview && (
        <div className={styles.previewContainer}>
          <div className={styles.Preview_header}>
            {/* <AiFillInfoCircle style={{ marginRight: "8px", fontSize: "20px" }} /> */}

            <IoInformationCircleOutline style={{ fontSize: "14px" }} />
            <span>
              The preview below is displayed within an iframe to ensure it
              remains unaffected by the surrounding page's styles and scripts
            </span>
          </div>
          <iframe
            ref={iframeRef}
            title="SunEditor Preview"
            style={{
              width: "100%",
              border: "1px solid #dadada",
              borderRadius: "0px 0px 4px 4px",
            }}
            className={styles.Preview_iframe}
          />
        </div>
      )}
    </>
  );
};
