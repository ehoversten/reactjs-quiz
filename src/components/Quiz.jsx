import React, { useState } from 'react'
import dataset from '../data/questions';

export const Quiz = ({ updateScore, updateGameState }) => {
    const [questions, setQuestions] = useState(dataset);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleUserChoice = (event) => {
        event.stopPropagation();
        checkAnswer(event.target.value);
    }

    const nextQuestion = () => {
        // do we have more questions (?)
        if(currentQuestion >= questions.length - 1) {
            console.log("Game Over Dude");
            updateGameState('end')
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const checkAnswer = (ans) => {
        if(ans === questions[currentQuestion].answer) {
            console.log("Correct")
            setScore((prev) => prev += 10);
            updateScore((prev => prev += 10));
        }
        nextQuestion();
    }

    return (
        <div className="quiz-container">
            <h4 className="score-container">Score: {score}</h4>
            <h2 className="question-title">{questions[currentQuestion].title}</h2>
            <div className="answer-choice-container" onClick={handleUserChoice}>
                { questions[currentQuestion].choices.map((ans, i) => (
                    <button 
                        className="user-choice"
                        key={i}
                        value={questions[currentQuestion].choices[i]}
                    >{ans}</button>
                ))}
            </div>
        </div>

    )
}
