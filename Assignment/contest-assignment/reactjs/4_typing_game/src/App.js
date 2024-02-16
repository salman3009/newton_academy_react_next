import React, { useState } from 'react';
import './App.css';


function App() {
  const [userInput, setUserInput] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0)
  const [charPressed, setCharPressed] = useState(0);
  const [charTillNow, setCharTillNow] = useState(0)
  const texts = ['Sample text 1', 'Sample text 2', 'Sample text 3', 'Sample text 4', 'Sample text 5', 'Sample text 6', 'Sample text 7', 'Sample text 8', 'Sample text 9', 'Sample text 10'];

  const changeHandler = (event) => {
    const newInput = event.target.value;
    setUserInput(newInput);
    const currentText = texts[textIndex];

    setCharIndex(Math.min(charIndex, newInput.length));
    const expectedCharacter = currentText[charIndex];
    
    if (newInput.charAt(newInput.length-1) === expectedCharacter) {
      event.target.style.backgroundColor = 'white';
      setCharTillNow(charTillNow+1);
      if(charIndex === (currentText.length-1)) handleTextCompleted();
      else {
        setCharIndex(charIndex+1);
      }
    } else {
      event.target.style.backgroundColor = 'red';
    }
  };

  const handleTextCompleted = () => {
    setUserInput('');
    setCharIndex(0);
    setTextIndex((prevIndex) => prevIndex + 1);
  };

  const restartGame = () => {
    setUserInput('');
    setCharIndex(0);
    setTextIndex(0);
    setCharPressed(0);
    setCharTillNow(0);
  }

  const handleKeyPress = (event) => {
    const keyPressed = event.key;
    if(keyPressed.length == 1){
      setCharPressed(charPressed+1);
    }
  };

  return (
    <div className="typing-game">
      <div className="text">{texts[textIndex]}</div>
      <input className="input" type="text" value={userInput} onChange={changeHandler} onKeyDown={handleKeyPress} />
      <div className="accuracy">Accuracy: {(charTillNow && (charTillNow*100)/charPressed)}%</div>
      <button className="restart-btn" onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default App;
