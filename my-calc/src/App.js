// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';


const App = () => {

  const [result,setResult]=useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay=()=> {
    setResult("");
  }

  const back=()=>{
    setResult(result.substr(0, result.length-1))
  }
  const calculate =()=> {

    setResult(eval(result).toString())
  }
  const invert = () => {
    setResult(result.split("").reverse().join(""))
  }
  const percent = () => {
    setResult(result/100)
  }

  return (
    <div className="calc">
      <h1>Calculator</h1>
      <input type="text" placeholder='0' id="answer" value={result}></input>

      <input type="button" value="%" className='button' onClick={percent}></input>
      <input type="button" value="Invert" className='button' onClick={invert}></input>

      <input type="button" value="Clr" className='button' onClick={clearDisplay}></input>
      <input type="button" value="<<" className='button' onClick={back}></input>
      
      <input type="button" value="7" className='button' onClick={clickHandler}></input>
      <input type="button" value="8" className='button' onClick={clickHandler}></input>
      <input type="button" value="9" className='button' onClick={clickHandler}></input>
      <input type="button" value="*" className='button' onClick={clickHandler}></input>

      <input type="button" value="4" className='button' onClick={clickHandler}></input>
      <input type="button" value="5" className='button' onClick={clickHandler}></input>
      <input type="button" value="6" className='button' onClick={clickHandler}></input>
      <input type="button" value="-" className='button' onClick={clickHandler}></input>

      <input type="button" value="1" className='button' onClick={clickHandler}></input>
      <input type="button" value="2" className='button' onClick={clickHandler}></input>
      <input type="button" value="3" className='button' onClick={clickHandler}></input>
      <input type="button" value="+" className='button' onClick={clickHandler}></input>

      
      
      <input type="button" value="0" className='button' onClick={clickHandler}></input>
      <input type="button" value="." className='button' onClick={clickHandler}></input>
      <input type="button" value="/" className='button' onClick={clickHandler}></input>
      <input type="button" value="=" className='button' onClick={calculate}></input>
      
    </div>
  );
}

export default App;
