import React, { useState } from 'react'
import dataset from '../data/questions';

export const Quiz = ({ updateScore, endGame, updateGameState }) => {
    const [questions, setQuestions] = useState(dataset);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [score, setScore] = useState(0);

    const handleUserChoice = (event) => {
        event.stopPropagation();
        console.log("Choice: ", event.target);
        console.log("Data: ", event.target.value);
        console.log("Data: ", event.target.textContent);
        setUserChoice(event.target.value)
        checkAnswer(event.target.value);
    }

    const nextQuestion = () => {
        // do we have more questions (?)
        if(currentQuestion >= questions.length - 1) {
            console.log("Game Over Dude");
            endGame(true);
            updateGameState(false)
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
            <div className="answer-choice" onClick={handleUserChoice}>
                {/* <button 
                    className="choice-a"
                    // onClick={() => setUserChoice("a")}
                    value={questions[currentQuestion].choices[0]}
                    >{questions[currentQuestion].choices[0]}</button>
                <button 
                    className="choice-b"
                    // onClick={() => setUserChoice("b")}
                    value={questions[currentQuestion].choices[1]}
                    >{questions[currentQuestion].choices[1]}</button>
                <button 
                    className="choice-c"
                    // onClick={() => setUserChoice("c")}
                    value={questions[currentQuestion].choices[2]}
                    >{questions[currentQuestion].choices[2]}</button>
                <button 
                    className="choice-d"
                    // onClick={() => setUserChoice("d")}
                    value={questions[currentQuestion].choices[3]}
                    >{questions[currentQuestion].choices[3]}</button> */}

                { questions[currentQuestion].choices.map((ans, i) => (
                    <button 
                        className="user-choice"
                        value={questions[currentQuestion].choices[i]}
                        >{ans}</button>
                ))}
            </div>
        </div>

    )
}
