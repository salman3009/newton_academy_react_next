import React from 'react'
import MegaBoost from './MegaBoost';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <div id="main">
      Count: {count}
      <button
        className='single-increment-btn'
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </div>
  )
}


export default App;
