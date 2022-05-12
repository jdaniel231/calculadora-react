import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState('+');

  const calcular = () => {
    if(operator=="+")
      return parseFloat(nro1) + parseFloat(nro2);
    else if(operator=="-")
      return parseFloat(nro1) - parseFloat(nro2);
    else if(operator=="x")
      return parseFloat(nro1) * parseFloat(nro2)
    else 
      return parseFloat(nro1) / parseFloat(nro2)
  }

  useEffect(() => {
    setResult(calcular());
  }, [nro1, nro2, operator]);

  return (
    <div className="App">
      <h1>Calculdora</h1>
      <label>Primeiro numero</label>
      <input 
        type="number"
        value={nro1}
        onChange={(e) => setNro1(e.target.value)}
      />
      <label> Segundo numero </label>
      <input 
        type="number" 
        value={nro2}
        onChange={(e) => setNro2(e.target.value)}
      />
      <br />
      <select onChange={(e) => setOperator(e.target.value)}>
        <option value="">+</option>
        <option value="">-</option>
        <option value="">x</option>
        <option value="">/</option>
      </select>

      <label> = {result}</label>
    </div>
  );
}

export default App;
