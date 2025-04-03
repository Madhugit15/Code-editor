import React from 'react'
import { useContext } from 'react'
import { htmlCode } from '../App'
import './navbar.css'
function Preview() {
    const {Content}=useContext(htmlCode)
  return (
    <div className="preview">
<div dangerouslySetInnerHTML={{ __html: Content }}  />
    </div>
    
  )
}

export default Preview