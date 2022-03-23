
import Box from './Box'; 
import './BoxContainers.css'; 
import {useSelector} from "react-redux"; 



// parent class 
function BoxContainers() {
    const clickCount = useSelector((state) => state.clickCount); 
    const boxContainer = useSelector((state) => state.game); 

    const container = []; 
    let count = 0; 

    for (let i = 0; i < boxContainer.length; i++) {
        let row = boxContainer[i]; 
        for (let j = 0; j < row.length; j++) {
            container.push(<Box symbol={boxContainer[i][j]} x = {i} y = {j}/>); 
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