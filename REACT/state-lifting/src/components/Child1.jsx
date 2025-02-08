import React from 'react'


const Child1 = (props) => {
    
  return (
    <div>
        <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
        <p>the value you entered in the textfield is: {props.name}</p>
      
    </div>
  )
}

export default Child1
