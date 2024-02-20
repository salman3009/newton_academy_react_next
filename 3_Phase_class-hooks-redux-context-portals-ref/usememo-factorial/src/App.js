
import { useState } from 'react';
import FactorialComponent from './FactorialComponent';
export default function App() {
  
      const [num, setNum] = useState(5);
      const [finalNumber,setFinalNumber] = useState(5);
      
      const onClickHandler=()=>{
        setFinalNumber(num);
      }
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <section>
                <h2>Factorial Calculation</h2>
                <input 
                    type="number" 
                    value={num} 
                    onChange={e => setNum(e.target.value)} 
                />
                <button onClick={onClickHandler}>Factorial</button>
                FactorialComponent
                <FactorialComponent num={finalNumber} />
            </section>
    </div>
);
}
