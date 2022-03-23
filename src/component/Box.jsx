import React, { useDebugValue, useState } from 'react'; 


import './Box.css'; 

// child class
// receive props from parent class
export default function Box(props) {
    const symbol = props.symbol; 
    let bgColor = "white"; 
    if (symbol == "Y") {
        bgColor = "black"; 
    }


    return (
        <div onClick={() => {
                            const {boxContainer, onClick, x, y} = props;
                            if (symbol === "Y") {
                                boxContainer[x][y] = "N"; 
                            }else {
                                boxContainer[x][y] = "Y"; 
                            }
                            // invoke parent's onClick function => setBoxContainer
                            onClick([...boxContainer]);
        }
        }
        id="box"
        class={bgColor}
        >
        
        </div>
    ); 
}

