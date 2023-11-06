import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
    const [tempObj, setTempObj] = useState({
      scale: 'celsius',
      temperature: 0,
    });
    
    const celsius =0;
    const fahrenheit =0;
    const kelvin =0;

    function onCelsiusChange(){

    }
    function onFahrenheitChange(){

    }
    function onKelvinChange(){

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
