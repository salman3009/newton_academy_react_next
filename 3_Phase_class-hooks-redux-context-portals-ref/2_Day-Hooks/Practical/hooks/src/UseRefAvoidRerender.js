import React, { useEffect, useRef,useState } from 'react';

export const App = () => {
  const prevValueRef = useRef();
  const [getName,setName] = useState();


  useEffect(()=>{
     setName(prevValueRef.current.value)
  },[prevValueRef])

  const onSubmitHandler=()=>{
 setName(prevValueRef.current.value)
  }



  return (
    <div>
      <p>getName:{getName}</p>
      <input ref={prevValueRef} type="text"/>
      <button onClick={onSubmitHandler}>Submit</button>
    </div>
  );
};