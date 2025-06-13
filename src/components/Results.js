import React, { useState } from 'react';
import { callGeminiAPI } from '../services/geminiService';

const Results = ({ questions, userAnswers, score, onRetakeTest, onBackToSelection, testMode }) => {
    const [expandedQuestions, setExpandedQuestions] = useState({});
    const [elaboratedExplanations, setElaboratedExplanations] = useState({});

    const handleElaborateExplanation = async (question) => {
        const prompt = `Please provide a detailed explanation for this GCP question: ${question.questionText}\n\nCorrect answer: ${question.options[question.correctAnswer[0]]}\n\nCurrent explanation: ${question.explanation}`;
        
        const explanation = await callGeminiAPI(prompt);
        setElaboratedExplanations(prev => ({
            ...prev,
            [question.id]: explanation
        }));
    };

    const toggleQuestion = (questionId) => {
        setExpandedQuestions(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const isAnswerCorrect = (question, userAnswer) => {
        if (!userAnswer) return false;
        return JSON.stringify(question.correctAnswer.sort()) === JSON.stringify(userAnswer.sort());
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={onBackToSelection}
                    className="text-blue-600 hover:text-blue-800"
                >
                    ← Back to Selection
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Test Results</h2>
                <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                        {score}%
                    </div>
                    <p className="text-gray-600">
                        You answered {Object.keys(userAnswers).length} out of {questions.length} questions
                    </p>
                </div>

                <div className="space-y-6">
                    {questions.map((question, index) => {
                        const userAnswer = userAnswers[question.id];
                        const isCorrect = isAnswerCorrect(question, userAnswer);
                        const isExpanded = expandedQuestions[question.id];

                        return (
                            <div key={question.id} className="border rounded-lg p-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleQuestion(question.id)}
                                >
                                    <div className="flex items-center">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                            isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                        }`}>
                                            {isCorrect ? '✓' : '✗'}
                                        </span>
                                        <span className="font-medium">Question {index + 1}</span>
                                    </div>
                                    <button className="text-gray-500">
                                        {isExpanded ? '▼' : '▶'}
                                    </button>
                                </div>

                                {isExpanded && (
                                    <div className="mt-4 pl-11">
                                        <p className="font-medium mb-2">{question.questionText}</p>
                                        <div className="space-y-2 mb-4">
                                            {question.options.map((option, optIndex) => (
                                                <div
                                                    key={optIndex}
                                                    className={`p-2 rounded ${
                                                        question.correctAnswer.includes(optIndex)
                                                            ? 'bg-green-100'
                                                            : userAnswer?.includes(optIndex)
                                                            ? 'bg-red-100'
                                                            : ''
                                                    }`}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="font-medium mb-2">Explanation:</h4>
                                            <p className="text-gray-700 mb-2">{question.explanation}</p>
                                            <button
                                                onClick={() => handleElaborateExplanation(question)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Get Elaborated Explanation
                                            </button>
                                            {elaboratedExplanations[question.id] && (
                                                <div className="mt-2 p-3 bg-gray-50 rounded">
                                                    <p className="text-gray-700">
                                                        {elaboratedExplanations[question.id]}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={onRetakeTest}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Retake Test
                </button>
            </div>
        </div>
    );
};

export default Results; 