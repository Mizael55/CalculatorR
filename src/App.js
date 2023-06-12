
import './App.css';
import Bottom from './components/bottom';
import Screen from './components/screen';
import BottonClear from './components/botton_clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');

  const addToInput = (val) => {
    setInput(input + val);
  }

  const handlerClear = () => {
    setInput('');
  }

  const handleEqual = () => {
    if (input === '') return;
    setInput(evaluate(input));
  } 

  return (
    <div className="App">

      <div className='container-calculator'>
        <Screen input={input} />
        <div className='line'>
          <Bottom handleClick={addToInput}>1</Bottom>
          <Bottom handleClick={addToInput}>2</Bottom>
          <Bottom handleClick={addToInput}>3</Bottom>
          <Bottom handleClick={addToInput}>+</Bottom>
        </div>
        <div className='line'>
          <Bottom handleClick={addToInput}>4</Bottom>
          <Bottom handleClick={addToInput}>5</Bottom>
          <Bottom handleClick={addToInput}>6</Bottom>
          <Bottom handleClick={addToInput}>-</Bottom>
        </div>
        <div className='line'>
          <Bottom handleClick={addToInput}>7</Bottom>
          <Bottom handleClick={addToInput}>8</Bottom>
          <Bottom handleClick={addToInput}>9</Bottom>
          <Bottom handleClick={addToInput}>*</Bottom>
        </div>
        <div className='line'>
          <Bottom handleClick={handleEqual}>=</Bottom>
          <Bottom handleClick={addToInput}>0</Bottom>
          <Bottom handleClick={addToInput}>.</Bottom>
          <Bottom handleClick={addToInput}>/</Bottom>
        </div>
        <div className='line'>
          <BottonClear handlerClear={handlerClear}>clear</BottonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
