import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()


  function incrementHandler(){
    dispatch(increment());
  }
  function decrementHandler(){
    dispatch(decrement())
  }
  function resetHandler(){
    dispatch(reset())
  }
  function incByAmountHandler(){
    dispatch(incrementByAmount())
  }

  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      <br />
      <p>Count: {count}</p>
      <br />
      <button onClick={decrementHandler}>-</button>
      <br />
      <button onClick={resetHandler}>reset</button>
      <br />
      <input 
      type="number"
      placeholder='enter an amount'
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      />
      <button onClick={incByAmountHandler}>Inc BY Amount</button>
    </div>
  )
}

export default App
