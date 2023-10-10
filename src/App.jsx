import { useState } from 'react'
import { Quiz } from './components/Quiz'
import { Welcome } from './components/Welcome';
import './App.css'

function App() {
  const [gameState, setGameState] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [userScore, setUserScore] = useState(0)
 
  console.log("Game State: ", gameState)

  return (
    <>
      <h1>Quiz Game</h1>
      {/* <h3>User Score {userScore}</h3> */}
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
      ) : ( <h2>Balls</h2> )}

    </>
  )
}

export default App
