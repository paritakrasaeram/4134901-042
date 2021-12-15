import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import car from './components/car';
import List from './components/List';
import Ul from './components/Ul';
import Datateble from './components/Datateble'; 
import Hook from './components/Hook';

ReactDOM.render(
  
  <React.StrictMode>
    <Datateble />
    <MyName />
    <Hook/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
