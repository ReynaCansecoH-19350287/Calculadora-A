import './App.css'

function App() {
  return (
  <div>
    <h1>Calculadora</h1>
    <table>
      {/* First row */}
      <tr>
        <td colSpan={4}> RESULTADO </td>
        </tr>
      {/* Second row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> C </button>
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> / </button>
      </td>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> * </button>          
      </td>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> - </button>  
      </td>
      </tr>
      {/* Third row */}
      <tr>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> 7 </button>
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> 8 </button>
      </td>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> 9 </button>
      </td>
      <td 
      rowSpan={2}>
        <button 
        type= "button"
        className='btn btn-primary w-75'
        style={{height: "80px"}}
        > + </button>            
      </td>
      </tr>
      {/* Fourth row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> 4 </button>   
      </td>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> 5 </button>            
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> 6 </button>
      </td>
      </tr>
      {/* Firth row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className='btn btn-primary w-75'> 1 </button> 
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> 2 </button>
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> 3 </button>
      </td>
      <td rowSpan={2}>
        <button 
        type= "button"
        className='btn btn-primary w-75'
        style={{height: "80px"}}
        > = </button>
      </td>
      </tr>
      {/* Sixth row */}
      <tr>
      <td colSpan={2}>
        <button 
        type= "button"
        className='btn btn-primary'
        style={{width: "175px"}
        }> 0 </button>
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'> . </button>
        </td>
        </tr>
      </table>
    </div>
  )
}

export default App