//quando se usa state(estado) chama-se hook(gancho)
import { useState } from "react";

export function Counter(){
  //desestruturacao
  const [counter, setCounter] = useState(0);
  
  function increment(){
    setCounter(counter + 1)
  }

  return(
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}