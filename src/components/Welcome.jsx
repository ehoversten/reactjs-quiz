import React from 'react'

export const Welcome = ({ start }) => {

  return (
    <div className="welcome-container">
        <div>Welcome to the Quiz Game</div>
        <h3>Press the <span className='startBtn'>start</span> button to begin</h3>
    
        <button onClick={ () => start(true)}>Start</button>
    </div>
  )
}
