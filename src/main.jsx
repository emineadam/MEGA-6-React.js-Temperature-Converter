import React from 'react';
import ReactDOM from 'react-dom';
import TemperatureConverter from './TemperatureConverter';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <TemperatureConverter />
    < Footer/>
  </React.StrictMode>,
  document.getElementById('root')

);
