import React, {useState} from 'react'
import "./ReactComponents.css"

const ReactComponent = () => {
    
    const [count, setCount] = useState(0);
  return (
    <div>
        <p id='para'>you click {count} tims</p>
        <button id='button' onClick={()=>{setCount(count+1)}}>Click Me</button>
      
    </div>
  )
}

export default ReactComponent
