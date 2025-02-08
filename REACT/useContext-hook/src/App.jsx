import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';
//useContext hook steps:
//step:01--> first we will create a useContext 
//step:02--> then we will provide context to all components where we want to use it
//step:03--> then we will pass values to the provider which we want to use in the child component
//step:04--> then we will export the Context in the parent class itself
//step:05--> then we will import the Context in the child component and will use the passing values there

//step01:
const changeTheme = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <changeTheme.Provider value = {{theme,setTheme}}>
        <div id = 'container' style={{backgroundColor:theme === 'light'?"beige":"blue"}}>
        <ChildA/>
        </div>
        

      </changeTheme.Provider>


    </div>
  )
}

export default App
export {changeTheme}
