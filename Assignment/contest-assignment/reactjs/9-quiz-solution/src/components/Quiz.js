import React, { useState } from "react";

const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      score: 1
    },
    {
      question: "What is the largest country in the world?",
      answer: "Russia",
      score: 1
    },
    {
      question: "What is the currency of Japan?",
      answer: "Yen",
      score: 1
    },
    {
      question: "What is the tallest mammal?",
      answer: "Giraffe",
      score: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "Au",
      score: 1
    }
];

function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };
  
    const handleAnswerSubmit = () => {
        if (answer.toLowerCase() === questions[questionIndex].answer.toLowerCase()) {
          setScore(score + 1);
          if (questionIndex === questions.length - 1) {
            setGameOver(true);
          } else {
            setQuestionIndex(questionIndex + 1);
          }
          setAnswer("");
          setAttempts(0);
        } else {
          setAttempts(attempts + 1);
          if (attempts === 2) {
            if (questionIndex === questions.length - 1) {
              setGameOver(true);
            } else {
              setQuestionIndex(questionIndex + 1);
            }
            setAnswer("");
            setAttempts(0);
          }
        }
    };
      
    
    const handleRetry = () => {
      setQuestionIndex(0);
      setAnswer("");
      setAttempts(0);
      setGameOver(false);
      setScore(0);
    };
  
    const currentQuestion = questions[questionIndex];
  
    if (gameOver) {
      return (
        <div className="game-over-container">
          <h1 className="game-over-heading">Game Over</h1>
          <p className="score-para">Your score: {score}/{questions.length}</p>
          <button className="retry-btn" onClick={handleRetry}>Retry</button>
        </div>
      );
    }
  
    return (
      <div>
        <h1 className="question-text">{currentQuestion.question}</h1>
        <input className="answer-input" value={answer} onChange={handleAnswerChange} /><br />
        <button className="submit-btn" onClick={handleAnswerSubmit}>Submit</button>
        {attempts === 1 && <p className="attempt-alert">Incorrect. Two attempts remaining.</p>}
        {attempts === 2 && <p className="attempt-alert">Incorrect. One attempt remaining.</p>}
      </div>
    );
}

export default Quiz;
