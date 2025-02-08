import { useRef, useState } from 'react'
import './App.css'

function App() {
  //Example 01
  // const[count, setCount] = useState(0);
  // const val = useRef(0);
  // let btnRef = useRef(null);

  //we use useRef hook to handle any element in the DOM 
  //so for that here we will use to change the color of the increment button using another button on UI
  //on that button when we click it will change the color of the button

  // function handleClick(){
  //   val.current = val.current+1;
  //   setCount(count+1);
  //   console.log("the value of val variable is: ", val.current);
  // }

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = 'yellow'
  // }


  //Example 02:
  //now we will create a stopWatch which will have three buttons 
  //one will start the stopwatch 
  //one will stop it
  //and the last button will restart its value
  const[time, setTime]= useState(0);
  let timerRef = useRef(0);

  function startTimer(){
   timerRef.current = setInterval(()=>{
      setTime(time=>time+1)
    },1000);

  }
  function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  function restartTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h2>timer {time} seconds</h2>
      <br />
      <button 
      ref={timerRef}
      onClick={startTimer}>
        start
      </button>
      <br />
      <button onClick={stopTimer}>
        stop
      </button>
      <br />
      <button onClick={restartTimer}>
        restart
      </button>







      {/* <button
      ref={btnRef}
      onClick={handleClick}>
        Increment
      </button>
      <br />
      <div>
        COUNT: {count}
      </div>
      <br />

      <div>
        <button onClick={changeColor}>
          change the color of above button
        </button>
      </div> */}
    </div>
  )
}

export default App
