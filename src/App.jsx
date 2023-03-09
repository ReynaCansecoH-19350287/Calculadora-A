import './App.css'

function App() {
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
        <h2>0</h2>
        </td>
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
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'
        >{'DEL'}</button>
      </td>
      <td>
        <button 
        type= "button"
        className='btn btn-primary w-75'
        > 0 </button>
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