import './App.css'
import { useState } from 'react'
import Child1 from './components/Child1'

function App() {
  const[name, setName] = useState('')
  return (
    <div>
      <Child1 name = {name} setName = {setName}/>
      <p>i am in the parent div and your text field value is: {name}</p>
    </div>
  )
}

export default App
