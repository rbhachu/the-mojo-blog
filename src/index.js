import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // import root component

// load root component 'App'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);