import { useState } from 'react'
import { Quiz } from './components/Quiz'
import { Welcome } from './components/Welcome';
import './App.css'

function App() {
  const [gameState, setGameState] = useState(false);

  console.log("Game State: ", gameState)

  return (
    <>
      <h1>Quiz Game</h1>

      { gameState ? <Quiz /> : <Welcome start={setGameState}/> }
      
    </>
  )
}

export default App
