// import React from 'react'
import React, { useState } from "react";


function TextBlock() {

    let [smile, setSmile]=useState(false)

  return (
    <div>
      <button onClick={()=>setSmile(smile=!smile)}>Улыбка на счастье</button>
      {smile&&(            
        <div className="textBlock">+</div>
        
      )}               
    </div>
  )
}

export default TextBlock
 /*если smile тогда(&&)  11строка*/