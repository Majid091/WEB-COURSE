import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import TimerComponent from './components/TimerComponent'

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(4)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//variation: 01
// this will run on every render
  // useEffect(() => {
  //  alert("this runs on every render...") 
  // })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//variation: 02
//this will run only on first render
// useEffect(() => {
//   alert("this will run on first render only")
// }, [])
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//variation: 03
// this will run when some event occur
// useEffect(() => {
//   alert("this will run only when value of count changes")
// }, [count])
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//variation:04
//this will run when more than one event occurs
// useEffect(() => {
//   alert("this will run when total/count value changes..")
// }, [count, total])
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//variation:05
//this will run when some event occur also when it will be mounted from the UI
// useEffect(() => {
//   alert("vlaue of count is updated")

//   return () => {
//     alert("count is mounted")
//   }
// }, [count])



  return (
    <div>
      {/* <TimerComponent/> */}








      {/* <button onClick={()=>{setCount(count+1)}}>
        Counting
      </button>
      <h2>Count {count}</h2>
      <br />

      <button onClick={()=>{setTotal(total+1)}}>
        Totalll
      </button>
      <h2>Total {total}</h2> */}
      
    </div>
  )
}

export default App
