const defaultState = [
    ["",""],
    ["",""],
]; 

export default function gameReducer(state= defaultState, action) {
    if (action.type === "click") {
        const val = state[action.x][action.y]; 
        // switch to unselected
        if (val === "Y") {
            state[action.x][action.y] = "N"; 
        // switch to selected 
        } else {
            state[action.x][action.y] = "Y"; 
        }
        return [...state]; 
    }
    return state; 
}