import React, { useState } from 'react';




function Counter({ initialCount = 0, step = 1 }) {



  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div style={{ 
      margin: '20px', 
      padding: '10px', 
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <h2>Compteur : {count}</h2>
      <button onClick={decrement}>-{step}</button>
      <button onClick={increment}>+{step}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;