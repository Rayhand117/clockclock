import React, { useState } from 'react'
import './App.css';

const RealtimeClock = () => {
    const [date, setDate] = useState(new Date());
  
    const tick = () => {
      setDate(new Date());
    };
  
    setInterval(() => tick(), 1000);
  
    return (
      <div className="App">
        <h1>Function CLOCK</h1>
        <hr />
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    );
  };

export default RealtimeClock;
