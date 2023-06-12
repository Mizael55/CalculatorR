
import './App.css';
import Bottom from './components/bottom';
import Screen from './components/screen';
import BottonClear from './components/botton_clear';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState('');

  const addToInput = (val) => {
    setInput(input + val);
  }

  const handlerClear = () => {
    setInput('');
  }

  

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <h2>Esta es mi calculadora</h2>
      </div>

      <div className='contenedor-calculadora'>
        <Screen input={input} />
        <div className='fila'>
          <Bottom handleClick={addToInput}>1</Bottom>
          <Bottom handleClick={addToInput}>2</Bottom>
          <Bottom handleClick={addToInput}>3</Bottom>
          <Bottom handleClick={addToInput}>+</Bottom>
        </div>
        <div className='fila'>
          <Bottom handleClick={addToInput}>4</Bottom>
          <Bottom handleClick={addToInput}>5</Bottom>
          <Bottom handleClick={addToInput}>6</Bottom>
          <Bottom handleClick={addToInput}>-</Bottom>
        </div>
        <div className='fila'>
          <Bottom handleClick={addToInput}>7</Bottom>
          <Bottom handleClick={addToInput}>8</Bottom>
          <Bottom handleClick={addToInput}>9</Bottom>
          <Bottom handleClick={addToInput}>*</Bottom>
        </div>
        <div className='fila'>
          <Bottom handleClick={addToInput}>=</Bottom>
          <Bottom handleClick={addToInput}>0</Bottom>
          <Bottom handleClick={addToInput}>.</Bottom>
          <Bottom handleClick={addToInput}>/</Bottom>
        </div>
        <div className='fila'>
          <BottonClear handlerClear={handlerClear}>clear</BottonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
