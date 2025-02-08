import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const[input,setInput] = useState(0);

//we use useMemo hook to memoised the previous value
//and it will return that value if we need it
//in short we can say it can handle the expensive tasks  

function expensiveTasks(num){
  console.log("inside the expensive task function");
  for(let i=0; i<1000000000; i++){

  }
  return num*2;
}

let doubleValue = useMemo(()=>expensiveTasks(input),[input]); 

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>
        increment
      </button>
      <br />
      <p>Count: {count}</p>
      <br />
      <input
      value={input}
      onChange={(e)=>{setInput(e.target.value)}}
      type="number"
       />
      <br />
      <p>Double: {doubleValue}</p>
    </div>
  )
}

export default App
