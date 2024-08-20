import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import './App.css';

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'Madrid', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Rome', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    // Add more questions here
];

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timeOut, setTimeOut] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-app">
            {showScore || timeOut ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <Timer
                        duration={30}
                        onTimeOut={() => setTimeOut(true)}
                    />
                    <Question
                        question={questions[currentQuestion]}
                        handleAnswerOptionClick={handleAnswerOptionClick}
                    />
                </>
            )}
        </div>
    );
}

export default QuizApp;