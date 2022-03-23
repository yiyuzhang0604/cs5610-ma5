import React from 'react'; 
import ReactDOM from 'react-dom';
import BoxContainers from './component/BoxContainers'; 
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import reducers from './reducers/reducer'; 
import './index.css'; 

const store = createStore(reducers); 




ReactDOM.render(
<Provider store={store}>
    <BoxContainers />
</Provider>,
document.getElementById('root')); 

