import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);
  
  function handleCountChange(e){
    setCount(e.target.value)
  }
  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <input value={count} onChange={handleCountChange}/>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
