import React, { useDebugValue, useState } from 'react'; 
import {useDispatch} from "react-redux"; 

import './Box.css'; 

// child class
// receive props from parent class
export default function Box(props) {
    const symbol = props.symbol; 
    let bgColor = "white"; 
    if (symbol == "Y") {
        bgColor = "black"; 
    }

    
    // function that passes action to store/reducer 
    const dispatch = useDispatch(); 
    return (
        <div onClick={() => dispatch({
                            // action 
                            type: "click", 
                            x: props.x, 
                            y: props.y,
                            })}
                            id="box"
                            class={bgColor}>

                            </div>
    ); 
}

