import React from 'react';

function CounterButton({ increment }) {
    console.log("CounterButton rendered!");

    return <button onClick={increment}>Increment</button>;
}

export default React.memo(CounterButton);
