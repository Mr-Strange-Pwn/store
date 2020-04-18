import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom'
import { storeProducts } from './data'



const context = React.createContext()

export const Provider = context.Provider
export const Consumer = context.Consumer

ReactDOM.render(
  <React.StrictMode>
    <Provider value={storeProducts} >      
      <Router>
        <App />
      </Router>
      </Provider>

   </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
