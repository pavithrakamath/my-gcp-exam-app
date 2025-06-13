import React, { useState, useEffect } from 'react';
import { callGeminiAPI } from '../services/geminiService';

const Test = ({ questions, onTestSubmit, onBackToSelection, testMode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(() => {
        // Initialize userAnswers with empty arrays for each question
        const initialAnswers = {};
        questions.forEach(question => {
            initialAnswers[question.id] = [];
        });
        return initialAnswers;
    });
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
    const [elaboratedExplanation, setElaboratedExplanation] = useState('');
    const [showFeedback, setShowFeedback] = useState({});

    // Validate questions array
    useEffect(() => {
        if (!questions || questions.length === 0) {
            console.error('No questions provided to Test component');
            onBackToSelection();
            return;
        }
    }, [questions, onBackToSelection]);

    useEffect(() => {
        if (testMode === 'exam') {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 0) {
                        clearInterval(timer);
                        handleSubmitTest();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [testMode]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleOptionChange = (optionIndex) => {
        if (!questions[currentQuestionIndex]) return;
        
        const currentQuestion = questions[currentQuestionIndex];
        const newAnswers = {
            ...userAnswers,
            [currentQuestion.id]: [optionIndex]
        };
        setUserAnswers(newAnswers);
        
        if (testMode === 'practice') {
            setShowFeedback(prev => ({
                ...prev,
                [currentQuestion.id]: true
            }));
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleElaborateExplanation = async () => {
        if (!questions[currentQuestionIndex]) return;
        
        const question = questions[currentQuestionIndex];
        const prompt = `Please provide a detailed explanation for this GCP question: ${question.questionText}\n\nCorrect answer: ${question.options[question.correctAnswer[0]]}\n\nCurrent explanation: ${question.explanation}`;
        
        const explanation = await callGeminiAPI(prompt);
        setElaboratedExplanation(explanation);
    };

    const handleSubmitTest = () => {
        onTestSubmit(userAnswers);
    };

    // Guard against undefined questions
    if (!questions || questions.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">No Questions Available</h2>
                    <p className="text-gray-600 mb-4">There are no questions available for this test.</p>
                    <button
                        onClick={onBackToSelection}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Back to Selection
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    
    // Guard against undefined current question
    if (!currentQuestion) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Error Loading Question</h2>
                    <p className="text-gray-600 mb-4">There was an error loading the current question.</p>
                    <button
                        onClick={onBackToSelection}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Back to Selection
                    </button>
                </div>
            </div>
        );
    }

    const isAnswerCorrect = (questionId, answer) => {
        if (!answer) return null;
        const question = questions.find(q => q.id === questionId);
        return JSON.stringify(question.correctAnswer.sort()) === JSON.stringify(answer.sort());
    };

    const getFeedbackIcon = (isCorrect) => {
        if (isCorrect === null) return null;
        return isCorrect ? (
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
        ) : (
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        );
    };

    const getOptionClasses = (isSelected, isCorrect) => {
        const baseClasses = "block p-4 border rounded-lg cursor-pointer transition-colors duration-200";
        
        if (isSelected) {
            if (isCorrect === null) {
                return `${baseClasses} border-blue-500 bg-blue-50`;
            }
            return isCorrect
                ? `${baseClasses} border-green-500 bg-green-50`
                : `${baseClasses} border-red-500 bg-red-50`;
        }
        
        if (isCorrect === true) {
            return `${baseClasses} border-green-500 bg-green-50`;
        }
        
        return `${baseClasses} border-gray-200 hover:border-blue-300`;
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
                {testMode === 'exam' && (
                    <div className="text-lg font-semibold">
                        Time Remaining: {formatTime(timeLeft)}
                    </div>
                )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="mb-4">
                    <span className="text-gray-600">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                </div>
                <h2 className="text-xl font-semibold mb-4">{currentQuestion.questionText}</h2>
                
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = userAnswers[currentQuestion.id]?.includes(index);
                        const isCorrect = testMode === 'practice' && showFeedback[currentQuestion.id] 
                            ? currentQuestion.correctAnswer.includes(index)
                            : null;
                        
                        return (
                            <label
                                key={index}
                                className={getOptionClasses(isSelected, isCorrect)}
                            >
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion.id}`}
                                        checked={isSelected || false}
                                        onChange={() => handleOptionChange(index)}
                                        className="mr-3"
                                        disabled={testMode === 'practice' && showFeedback[currentQuestion.id]}
                                    />
                                    <span className="flex-grow">{option}</span>
                                    {testMode === 'practice' && showFeedback[currentQuestion.id] && (
                                        <span className="ml-2">
                                            {getFeedbackIcon(isCorrect)}
                                        </span>
                                    )}
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between mb-6">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {(testMode === 'practice' && showFeedback[currentQuestion.id]) && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center mb-4">
                        <h3 className="text-lg font-semibold">Explanation</h3>
                        {userAnswers[currentQuestion.id]?.length > 0 && (
                            <span className={`ml-3 px-3 py-1 rounded-full text-sm ${
                                currentQuestion.correctAnswer.includes(userAnswers[currentQuestion.id][0])
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                            }`}>
                                {currentQuestion.correctAnswer.includes(userAnswers[currentQuestion.id][0])
                                    ? 'Correct!'
                                    : 'Incorrect'}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-700 mb-4">{currentQuestion.explanation}</p>
                    <button
                        onClick={handleElaborateExplanation}
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Get Elaborated Explanation
                    </button>
                    {elaboratedExplanation && (
                        <div className="mt-4 p-4 bg-gray-50 rounded">
                            <p className="text-gray-700">{elaboratedExplanation}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="text-center">
                <button
                    onClick={handleSubmitTest}
                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Submit Test
                </button>
            </div>
        </div>
    );
};

export default Test; 