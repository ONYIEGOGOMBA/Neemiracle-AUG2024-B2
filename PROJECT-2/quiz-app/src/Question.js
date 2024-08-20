import React from 'react';

function Question({ question, handleAnswerOptionClick }) {
    return (
        <div className="question-section">
            <div className="question-text">{question.questionText}</div>
            <div className="answer-section">
                {question.answerOptions.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(option.isCorrect)}
                        className="answer-button"
                    >
                        {option.answerText}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;