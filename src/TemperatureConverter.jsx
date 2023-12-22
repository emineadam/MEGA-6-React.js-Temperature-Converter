// src/TemperatureConverter.js

import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
const [celsius, setCelsius] = useState('');
const [fahrenheit, setFahrenheit] = useState('');
const [kelvin, setKelvin] = useState('');
const [rankine, setRankine] = useState('');
  

  
const handleCelsiusChange = (e) => {
const value = e.target.value;
setCelsius(value);
setFahrenheit(value === '' ? '' : ((value * 9) / 5 + 32).toFixed(2));
setKelvin(value === '' ? '' : (parseFloat(value) + 273.15).toFixed(2));
setRankine(value === '' ? '' : ((parseFloat(value) + 273.15) * 9 / 5).toFixed(2));
};

  
  
const handleFahrenheitChange = (e) => {
const value = e.target.value;
setFahrenheit(value);
setCelsius(value === '' ? '' : (((value - 32) * 5) / 9).toFixed(2));
setKelvin(value === '' ? '' : ((((value - 32) * 5) / 9) + 273.15).toFixed(2));
setRankine(value === '' ? '' : ((parseFloat(value) + 459.67)).toFixed(2));
};

  
  
const handleKelvinChange = (e) => {
const value = e.target.value;
setKelvin(value);
setCelsius(value === '' ? '' : (parseFloat(value) - 273.15).toFixed(2));
setFahrenheit(value === '' ? '' : ((((parseFloat(value) - 273.15) * 9) / 5) + 32).toFixed(2));
setRankine(value === '' ? '' : ((parseFloat(value) + 459.67).toFixed(2)));
};

const handleRankineChange = (e) => {
const value = e.target.value;
setRankine(value);
setCelsius(value === '' ? '' : (((parseFloat(value) - 491.67) * 5) / 9).toFixed(2));
setFahrenheit(value === '' ? '' : (parseFloat(value) - 459.67).toFixed(2));
setKelvin(value === '' ? '' : ((parseFloat(value) - 491.67) * 5 / 9).toFixed(2));
};

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>
        Celsius -°C:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <br />
      <label>
        Fahrenheit -°F:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
      <br />
      <label>
        Kelvin -K:
        <input type="number" value={kelvin} onChange={handleKelvinChange} />
      </label>
      <br />
      <label>
        Rankine -°R:
        <input type="number" value={rankine} onChange={handleRankineChange} />
      </label>
    </div>
    
  );
};

export default TemperatureConverter;
