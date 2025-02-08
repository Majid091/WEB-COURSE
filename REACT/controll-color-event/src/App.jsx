import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorSwitch from './components/ColorSwitch'

function App() {
  const [clicks, setClicks] = useState(0)


  function handleClickOutside(){
    setClicks(c=>c+1)
  }

  function getRandomColor(){
    let r = 150+Math.round(100*Math.random());
    let g = 150+Math.round(100*Math.random());
    let b = 150+Math.round(100*Math.random());

    return `rgb(${r}, ${g}, ${b})`
  }

  function changeBoxColor(){
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomColor();
  }

  return (
    <div style={{width: '100%', height: '100%', border: '1px solid black'}} onClick = {handleClickOutside}>
      <ColorSwitch onChangeColor = {changeBoxColor} />
      <br />
      <br />
      <h2>count the clicks {clicks}</h2>
    </div>
  )
}

export default App
