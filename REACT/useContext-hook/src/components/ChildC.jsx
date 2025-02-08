import React, { useContext } from 'react'
import { changeTheme } from '../App'

const ChildC = () => {
    const {theme,setTheme} = useContext(changeTheme)

    function changeThemeColor(){
        if(theme === 'light'){
           setTheme('dark') 
        }
        else{
            setTheme('light')
        }
    }

  return (
    <div>
        <button onClick={changeThemeColor}>
            change theme
        </button>
    </div>
  )
}

export default ChildC
