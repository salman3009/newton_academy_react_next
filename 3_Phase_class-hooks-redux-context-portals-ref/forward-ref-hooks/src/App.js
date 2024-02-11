import React, { useRef, useState } from 'react';
import InputField from './InputField';

function App() {
  const newRef = useRef();
  const [values, setValues] = useState('');

  const focusInput = () => {
    newRef.current.focus();
  };
  const settingValue = () => {
    setValues(newRef.current.value);
  };

  return (
    <div>
      <InputField ref={newRef} type='text' getName={"akash"} />
      <br />
      <button id='settingValueButton' onClick={settingValue}>
        Set Value
      </button>
      <button id='focusInputButton' onClick={focusInput}>
        Focus the input
      </button>
      <br />
      <br />
      <textarea id='textarea' value={values}></textarea>
    </div>
  );
}

export default App;
