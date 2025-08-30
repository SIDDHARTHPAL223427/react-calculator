import { useState, useRef } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((prev) => prev + Number(inputRef.current.value)); 
  } 
 
  function minus(e) { 
    e.preventDefault();
    setResult((prev) => prev - Number(inputRef.current.value)); 
  }
 
  function times(e) { 
    e.preventDefault();
    setResult((prev) => prev * Number(inputRef.current.value)); 
  }
 
  function divide(e) { 
    e.preventDefault();
    const num = Number(inputRef.current.value);
    if (num !== 0) {
      setResult((prev) => prev / num);
    } else {
      alert("❌ Cannot divide by zero!");
    }
  }
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  }
 
  return ( 
    <div className="app-container d-flex justify-content-center align-items-center vh-100"> 
      <div className="glass-card p-4"> 
        <h2 className="text-center mb-4 fw-bold text-white">React Calculator</h2> 

        {/* Result Display */}
        <div className="result-box text-center fw-bold fs-2 mb-4">
          {result}
        </div> 

        {/* Input field */}
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Enter a number" 
          className="form-control mb-4 text-center input-box"
        /> 

        {/* Buttons Grid */}
        <div className="row g-2"> 
          <div className="col-6">
            <button onClick={plus} className="btn custom-btn btn-success w-100">➕ Add</button> 
          </div>
          <div className="col-6">
            <button onClick={minus} className="btn custom-btn btn-danger w-100">➖ Subtract</button> 
          </div>
          <div className="col-6">
            <button onClick={times} className="btn custom-btn btn-primary w-100">✖ Multiply</button> 
          </div>
          <div className="col-6">
            <button onClick={divide} className="btn custom-btn btn-warning w-100">➗ Divide</button> 
          </div>
        </div>

        {/* Reset Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button onClick={resetInput} className="btn btn-outline-light custom-btn">🧹 Reset Input</button> 
          <button onClick={resetResult} className="btn btn-outline-light custom-btn">🔄 Reset Result</button> 
        </div>
      </div> 
    </div> 
  ); 
} 
 
export default App;
