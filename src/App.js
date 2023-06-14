
import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');
  

  function addToInputAndEvaluateAndClear(val) {
    if (val === '=') {
      setInput(evaluate(input));
    } else if (val === 'Clear') {
      setInput('');

    } else {
      setInput(input + val);
    }
  }


  let values = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '=', 0, '.', '/', 'Clear'];


  return (
    <div className="">
      <div className=" ">
        <Screen input={input} />
        <div >
          <div>
            {values.map((value, index) => {
              return <Button key={index} handleClick={addToInputAndEvaluateAndClear}  >{ value }</Button>
            })}
          </ div>
        </div>
      </div>
    </div>
  );


}

export default App
  ;