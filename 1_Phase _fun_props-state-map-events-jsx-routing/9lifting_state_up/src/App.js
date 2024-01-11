import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

function App() {
  const [getInput,setInput] = useState('');

  const onChangeHandler=(event)=>{
    console.log(event);
     setInput(event.target.value);
  }
  return (
    <div className="App">
       <ChildOne onChangeHandler={onChangeHandler}/>
       <ChildTwo getInput={getInput}/>
    </div>
  );
}

export default App;
