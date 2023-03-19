import React, { useState } from 'react'
import './counter.css'
export default function Counter() {
    
    //states
    const[count, setCount] = useState(0);
    
    //buttons
    const increase = () => {
        setCount(count+1)
    }
    
    const decrease = () => {
        setCount(count-1)
    }
    
    const reset = () => {
        setCount(0)
    }
    

    return (
        <div className = "page">
            <div className="displayNumber">
                <p>
                    {count}
                </p>
            </div>
            <div className="buttons">
                <button onClick={increase}>INCREASE</button>
                <button onClick={decrease}>DECREASE</button>
                <button onClick={reset}>RESET</button>
            </div> 
        </div>
    )
}
