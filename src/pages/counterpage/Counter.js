import React, { useState, useEffect } from 'react'
import './counter.css'
import Switch from "react-switch";
import {styleLight,styleDark} from './style'

export default function Counter() {

    //states
    const[styling, setStyle] = useState(styleLight)
    const[mode, setMode] = useState(true)
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
    const toggle = () => {
        if(mode){
            setStyle(styleDark);
            setMode(false);
        } else {
            setStyle(styleLight);
            setMode(true);
        }
    }

    const hchange = () => {

    }
    

    return (
        <div /* className = "page" */  style={styling}>
            <div className="displayNumber">
                <p>
                    {count}
                </p>
            </div>
            <div className="buttons">
                <button onClick={increase}>INCREASE</button>
                <button onClick={decrease}>DECREASE</button>
                <button onClick={reset}>RESET</button>
                {/* <button onClick={toggle}>Toggle</button> */}
                
            </div> 
            <Switch onChange={toggle} checked = {mode} uncheckedIcon={false} checkedIcon={false} offColor="#f578d1" onColor='#2b6ced'/>
        </div>
    )
}
