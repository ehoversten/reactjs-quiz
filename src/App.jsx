import { useState } from 'react'
import { Quiz } from './components/Quiz'
import { Welcome } from './components/Welcome';
import './App.css'

function App() {
  // Game States --> Welcome | Start | End
  const [gameState, setGameState] = useState('welcome');
  // const [gameEnd, setGameEnd] = useState(false);
  const [userScore, setUserScore] = useState(0)
 
  console.log("Game State: ", gameState)

  const resetGame = () => {
    setUserScore(0);
    setGameState('start');
  }

  return (
    <>
      <h1>Quiz Game</h1>
      { gameState === 'welcome' ? <Welcome start={setGameState} /> : null }
      { gameState === 'start' ? (
        <Quiz 
          updateScore={setUserScore} 
          // endGame={setGameEnd}
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

      <hr />
{/*       
      { gameState ? <Quiz 
                      updateScore={setUserScore} 
                      endGame={setGameEnd}
                      updateGameState={setGameState}
                      /> : <Welcome start={setGameState} /> }
      
      { gameEnd ? (
        <>
           <h3>Thanks for playing!</h3>
           <h3>You scored {userScore}</h3>
           <button onClick={() => setGameEnd(false)}>Play Again?</button>
        </>
      ) : ( <></> )} */}

    </>
  )
}

export default App
