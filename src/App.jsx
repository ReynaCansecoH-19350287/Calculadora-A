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

    const buttonsInfo = [
      [
        {
          classes: buttonsClasses,
          value: 'C',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '/',
          handleClick: handleOperationButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '*',
          handleClick: handleOperationButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '-',
          handleClick: handleOperationButtonClick,
          style: {},
          rows: 1
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: '7',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '8',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '9',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '+',
          handleClick: handleOperationButtonClick,
          style: {height: "80px"},
          rows: 2
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: '4',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '5',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '6',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: '1',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '2',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '3',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '=',
          handleClick: handleEqualButtonClick,
          style: {height: "80px"},
          rows: 2
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: 'DEL',
          handleClick: handleDelButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '0',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '.',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
      ],
    ]
 
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
          {
            buttonsInfo.map((row) => {
              return (
                <tr>
                  {
                    row.map((cell) => {
                      return (
                        <td rowSpan={cell.rows}>
                        <Button
                        classes={cell.classes}
                        value={cell.value}
                        handleClick={cell.handleClick}
                        style={cell.style}
                        />
                      </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
  
  export default App
