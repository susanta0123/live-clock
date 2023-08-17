import React, { useState } from 'react';
import "./Clock.css"

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [Clock, setClock] = useState(time)

    const UpdateClock = () =>{
        time = new Date().toLocaleTimeString();
        setClock(time)

    }
    setInterval(UpdateClock, 1000)
  return (
    <>
<div className='container'>
    <div className='clock-wrapper'>
    <h1 className='clock'>
        {Clock}

    </h1>
    </div>
    </div>
    </>

  )
}

export default Clock
