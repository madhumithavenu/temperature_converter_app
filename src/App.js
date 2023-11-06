import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
    const [tempObj, setTempObj] = useState({
      scale: 'celsius',
      temperature: 0,
    });

  const celsius = (tempObj.scale === 'fahrenheit' || tempObj.scale == 'kelvin') ?
  (tempObj.scale == 'fahrenheit') ? f2c(tempObj.temperature) : k2c(tempObj.temperature)
  : tempObj.temperature;

  const fahrenheit = (tempObj.scale === 'celsius' || tempObj.scale == 'kelvin') ?
  (tempObj.scale == 'celsius') ? c2f(tempObj.temperature) : k2f(tempObj.temperature)
  : tempObj.temperature;

  const kelvin = (tempObj.scale === 'celsius' || tempObj.scale == 'fahrenheit') ?
  (tempObj.scale == 'celsius') ? c2k(tempObj.temperature) : f2k(tempObj.temperature)
  : tempObj.temperature;

    function f2c(value){
      return ((value - 32) * 5) / 9;
    }
  
    function k2c(value){
      return value - 273;
    }
  
    function c2f(value){
      return (value * 1.8) + 32;
    }
  
    function k2f(value){
      return((value - 273) * 1.8) + 32;
    }
  
    function c2k(value){
      return value + 273;
    }
  
    function f2k(value){
      return(((value - 32) * 5) / 9) + 273
    }

    function onCelsiusChange(tempValue){
      setTempObj({
        scale: 'celsius',
        temperature: isNaN(tempValue) ? 0 : tempValue,
      });
    }
    function onFahrenheitChange(tempValue){
      setTempObj({
        scale: 'fahrenheit',
        temperature: isNaN(tempValue) ? 0 : tempValue,
      });
    }
    function onKelvinChange(tempValue){
      setTempObj({
        scale: 'kelvin',
        temperature: isNaN(tempValue) ? 0 : tempValue,
      });
    }

  return (
    <div style={{"textAlign":"center"}}>
      <h2>Celsius: <Child temperature={celsius} onTemperatureChange={onCelsiusChange} /> </h2>
      <h2>Fahrenheit: <Child temperature={fahrenheit} onTemperatureChange={onFahrenheitChange} /> </h2>
      <h2>Kelvin: <Child temperature={kelvin} onTemperatureChange={onKelvinChange} /> </h2>
    </div>
    
  );
}


export default App;
