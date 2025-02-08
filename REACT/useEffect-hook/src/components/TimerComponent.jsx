import React, { useState } from 'react'
import { useEffect } from 'react';

const TimerComponent = () => {
    const[Seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(()=>{
            console.log("setInterval Executed...")
            setSeconds(preSeconds=>preSeconds+1)
        },1000)
      return()=>{
        //this line will run when we remove the component call from app.jsx file
        console.log("time to stop")
        clearInterval(intervalId)
      }
    }, []);
    

  return (
    <div>
        <h2>Seconds: {Seconds}</h2>
    </div>
  )
}

export default TimerComponent
