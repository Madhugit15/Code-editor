import React, { useContext } from 'react'
import { htmlCode } from '../App'

function HtmlContent() {
    const {Content}= useContext(htmlCode)
  return (
   <div style={{width:"90%", margin:"auto",border:"1px solid black", height:"500px",marginBottom:"25px",overflow:"scroll",}}>
    <p >{Content}</p>
   </div>
  )
}

export default HtmlContent