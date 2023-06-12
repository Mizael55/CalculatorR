
import './App.css';
import Bottom from './components/bottom';
import Screen from './components/screen';
import BottonClear from './components/botton_clear';


function App() {
  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <h2>Esta es mi calculadora</h2>
        </div>

        <div className='contenedor-calculadora'>
          <Screen />
          <div className='fila'>
            <Bottom>1</Bottom>
            <Bottom>2</Bottom>
            <Bottom>3</Bottom>
            <Bottom>+</Bottom>
          </div>
          <div className='fila'>
          <Bottom>4</Bottom>
            <Bottom>5</Bottom>
            <Bottom>6</Bottom>
            <Bottom>-</Bottom>
          </div>
          <div className='fila'>
          <Bottom>7</Bottom>
            <Bottom>8</Bottom>
            <Bottom>9</Bottom>
            <Bottom>*</Bottom>
          </div>
          <div className='fila'>
          <Bottom>=</Bottom>
            <Bottom>0</Bottom>
            <Bottom>.</Bottom>
            <Bottom>/</Bottom>
          </div>
          <div className='fila'>
            <BottonClear>clear</BottonClear>
          
          </div>
        </div>
    </div>
  );
}

export default App;
