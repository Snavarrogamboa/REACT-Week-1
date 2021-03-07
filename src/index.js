import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import HomePage from './components/home';
import reportWebVitals from './reportWebVitals';

//Rendering the Homepage

ReactDOM.render(
  React.createElement(HomePage, {}, null),
  document.getElementById('root')
);


reportWebVitals();


//This was a really simple yet confusing project
//still dont know what is going on fully
//Really appreciate the DOM immediately updating when I make change to the code though with REACT