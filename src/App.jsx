import { useState } from 'react';
import './App.css'

const buttonsClasses = "btn btn-primary w-75";

function App() {
  const [digital, setDigital] = useState('0')

  const handleButtonClick = (e) =>{
    const {value} = e.target;
    if (value === '.') {
      if (digital.includes('.')) return;
    }
    if (value === 'C') {
      setDigital('0')
      return;
    }
    if (digital === '0' && value !== '.') {
      setDigital(value)
      return;
    }
      setDigital(`${digital} ${value}`)
  }

  const handleDelButtonClick = () => {
    if  (digital.length === 1) {
      setDigital('0');
      return;
    } 
      setDigital(digital.slice(0, -1));
  }
  
  return (
  <div className='app'>
    <h1 className='shadow-sm'>Calculadora</h1>
    <table>
      {/* First row */}
      <tr>
        <td colSpan={4} style={{
          border: "1px solid black",
          textAlign: "end"
          }}> 
        <h2>{digital}</h2>
        </td>
      </tr>
      {/* Second row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="C"
        onClick={(e) => handleButtonClick(e)}
        >C</button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        >/</button>
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        >*</button>          
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        >-</button>  
      </td>
      </tr>
      {/* Third row */}
      <tr>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="7"
        onClick={(e) => handleButtonClick(e)}
        >7</button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="8"
        onClick={(e) => handleButtonClick(e)}
        >8</button>
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="9"
        onClick={(e) => handleButtonClick(e)}
        >9</button>
      </td>
      <td 
      rowSpan={2}>
        <button 
        type= "button"
        className={buttonsClasses}
        style={{height: "80px"}}
        >+</button>            
      </td>
      </tr>
      {/* Fourth row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="4"
        onClick={(e) => handleButtonClick(e)}
        >4</button>   
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="5"
        onClick={(e) => handleButtonClick(e)}
        >5</button>            
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="6"
        onClick={(e) => handleButtonClick(e)}
        >6</button>
      </td>
      </tr>
      {/* Firth row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="1"
        onClick={(e) => handleButtonClick(e)}
        >1</button> 
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="2"
        onClick={(e) => handleButtonClick(e)}
        >2</button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="3"
        onClick={(e) => handleButtonClick(e)}
        >3</button>
      </td>
      <td rowSpan={2}>
        <button 
        type= "button"
        className={buttonsClasses}
        style={{height: "80px"}}
        >=</button>
      </td>
      </tr>
      {/* Sixth row */}
      <tr>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        onClick={handleDelButtonClick}
        >{'DEL'}</button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="0"
        onClick={(e) => handleButtonClick(e)}
        >0</button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="."
        onClick={(e) => handleButtonClick(e)}
        >.</button>
        </td>
        </tr>
      </table>
    </div>
  )
}

export default App
