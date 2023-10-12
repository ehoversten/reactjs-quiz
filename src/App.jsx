import { useState } from 'react'
import { Quiz } from './components/Quiz'
import { Welcome } from './components/Welcome';
import './App.css'

function App() {
  // Game States --> Welcome | Start | End
  const [gameState, setGameState] = useState('welcome');
  const [userScore, setUserScore] = useState(0)
 
  const resetGame = () => {
    setUserScore(0);
    setGameState('start');
  }

  return (
    <div className='app-container'>
      <h1>Quiz Game</h1>
      { gameState === 'welcome' ? <Welcome start={setGameState} /> : null }
      { gameState === 'start' ? (
        <Quiz 
          updateScore={setUserScore} 
          updateGameState={setGameState}
          />
        ) : null }
      { gameState === 'end' ? (
        <>
           <h3>Thanks for playing!</h3>
           <h3>You scored {userScore}</h3>
           <button onClick={resetGame}>Play Again?</button>
        </> 
        ) : null }
    </div>
  )
}

export default App
