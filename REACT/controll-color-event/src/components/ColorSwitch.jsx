import React from 'react'

const ColorSwitch = () => {
  return (
    <div>
        <button onClick={e=>{
            e.stopPropagation();
            onChnageColor();
        }}>
            change color
        </button>
      
    </div>
  )
}

export default ColorSwitch
