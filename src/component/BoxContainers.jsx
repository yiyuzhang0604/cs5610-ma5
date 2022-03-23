
import Box from './Box'; 
import './BoxContainers.css'; 
import {useState} from 'react'; 



// parent class 
function BoxContainers() {
    const[boxContainer, setBoxContainer] = useState([
        // initial 2 x 2 grid 
        ["",""],
        ["",""],
    ]); 



    const container = []; 
    let count = 0; 

    for (let i = 0; i < boxContainer.length; i++) {
        let row = boxContainer[i]; 
        for (let j = 0; j < row.length; j++) {
            // pass in props to child class
            container.push(<Box symbol={boxContainer[i][j]} 
                                onClick={setBoxContainer}
                                boxContainer={boxContainer}
                                x={i}
                                y={j}
                                />); 
            // if [i][j] == 1, means it's selected
            if (boxContainer[i][j] == "Y") {
                count++; 
            }
        }
    }

    return (
        <div>
            <div class="Count">Count: {count}</div>
            <div id="BoxContainers">{container}</div>

        </div>
    ); 
}
export default BoxContainers; 