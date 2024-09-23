import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0);
  const [reset, setReset] = useState(true);

  const updateScore = () => {
      setScore(() => score + 1);
      setReset(false);
  }

  const endGame = () => {
    if(score > highscore)
      setHighscore(score);
    setScore(0);
    setReset(true);
  };

  return (
    <>
      <Header score = {score} highscore = {highscore} />
    <div>
      <Cards 
        endGame = {endGame}
        updateScore = {updateScore}
        reset = {reset}
      />
    </div>
    </>
  )
}

export default App
