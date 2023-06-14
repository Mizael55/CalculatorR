
import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import ButtonClear from './components/button_clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');

  const addToInput = (val) => {
    setInput(input +  val)
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
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className='line'>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className='line'>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className='line'>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className='line'>
          <ButtonClear handlerClear={handlerClear}>clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App
;