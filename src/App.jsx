import { useState } from 'react';
import './App.css'
import Button from './components/Button';

const buttonsClasses = 'btn btn-primary w-75';

function App() {
  const [operator, setOperator] = useState('');
  const [number1, setNumber1] = useState('');
  const [digital, setDigital] = useState('0');
  const [clearDigital, SetClearDigital] = useState(false);

  const handleButtonClick = (e) => {
    const value = e.target.value;
    if (value === '.') {
      if (digital.includes('.'))
      return;
    }

    if (value === 'C') {
      setDigital('0');
      return; 
    }

    //===============================================
    console.log({number1});
    if (clearDigital) {
      console.log('Cambia pantalla');
      setDigital(value);
      SetClearDigital(false);
      return;
    }

    if (digital === '0' && value !== '.') {
      setDigital(value)
    } else {
      setDigital (`${digital}${value}`)
      }
    }
    
    const handleDelButtonClick = () => {
      if (digital.length === 1) {
        setDigital('0')
        return;
      }
      setDigital(digital.slice(0, -1));
    }
    
    const handleOperationButtonClick = (e) => {
      setOperator(e.target.value);
      setNumber1(digital);
      SetClearDigital(true);
    }
    
    const handleEqualButtonClick = () => {
      const a = + number1;
      const b = + digital;  
      switch (operator) {
        case '+':
          setDigital((a + b).toString());
          break;
          case '-':
          setDigital((a - b).toString());
          break;
          case '*':
          setDigital((a * b).toString());
          break;
          case '/':
          setDigital((a / b).toString());
          break;
      
        default:
          break;
      }
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
              > C </button>
            </td>
            <td>
              <button 
              type= "button" 
              value = "/"
              onClick ={(e) => handleOperationButtonClick(e)}
              className={buttonsClasses}> / </button>
            </td>
            <td>
              <button 
              type= "button" 
              value = "*"
              onClick ={(e) => handleOperationButtonClick(e)}
              className={buttonsClasses}> * </button>
            </td>
            <td>
              <button 
              type= "button" 
              value = "-"
              onClick ={(e) => handleOperationButtonClick(e)}
              className={buttonsClasses}> - </button>
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
              > 7 </button>
            </td>
            <td rowSpan={1}>
            {/* <button 
              type= "button" 
              className={buttonsClasses}
              value="8"
              onClick={(e) => handleButtonClick(e)}
              style={{}}
              > 8 </button> */}
              <Button 
              style={buttonsClasses} 
              handleClick={handleButtonClick}
              />
            </td>
            <td>
              <button 
              type= "button" 
              className={buttonsClasses}
              value="9"
              onClick={(e) => handleButtonClick(e)}
              > 9 </button>
            </td>
            <td rowSpan={2}>
              <button 
              type= "button"
              className={buttonsClasses}
              style={{height: "80px"}}
              value = "+"
              onClick ={(e) => handleOperationButtonClick(e)}
              > + </button>            
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
              > 4 </button>
            </td>
            <td>
              <button 
              type= "button" 
              className={buttonsClasses}
              value="5"
              onClick={(e) => handleButtonClick(e)}
              > 5 </button>
            </td>
            <td>
              <button 
              type= "button" 
              className={buttonsClasses}
              value="6"
              onClick={(e) => handleButtonClick(e)}
              > 6 </button>
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
              > 1 </button>
            </td>
            <td>
              <button 
              type= "button" 
              className={buttonsClasses}
              value="2"
              onClick={(e) => handleButtonClick(e)}
              > 2 </button>
            </td>
            <td>
              <button 
              type= "button" 
              className={buttonsClasses}
              value="3"
              onClick={(e) => handleButtonClick(e)}
              > 3 </button>
            </td>
            <td rowSpan={2}>
              <button 
              type= "button"
              className={buttonsClasses}
              style={{height: "80px"}}
              onClick={handleEqualButtonClick}
              > = </button>            
            </td>
          </tr>
  
          {/* Sixth row */}
          <tr>
            <td>
              <button
              type="button"
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
              > 0 </button>
            </td>
            <td>
              <button 
              type= "button" 
              className={buttonsClasses}
              value="."
              onClick={(e) => handleButtonClick(e)}
              > . </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
  
  export default App
