import './App.css'

function App() {


  function clickFunction(){
    alert("the button is clicked")
  }

  function paraOver(){
    alert("you over mouse on paragraph....")
  }

  return (
    <div>
      <p onMouseOver={paraOver}>i am paragraph</p>
      <button onClick={clickFunction}>
        Click Me
      </button>
    </div>
  )
}

export default App
