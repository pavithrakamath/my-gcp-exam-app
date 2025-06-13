import React, { useState, useEffect } from 'react';
import './App.css';
import TestSelection from './components/TestSelection';
import Test from './components/Test';
import Results from './components/Results';
import { questionsData } from './data/questions';

function App() {
    const [currentView, setCurrentView] = useState('selection');
    const [selectedTest, setSelectedTest] = useState(null);
    const [testMode, setTestMode] = useState(null);
    const [userAnswers, setUserAnswers] = useState(null);
    const [score, setScore] = useState(null);
    const [currentQuestions, setCurrentQuestions] = useState(null);

    const handleSelectTest = (testKey, mode) => {
        try {
            let questions;
            if (testKey === 'random') {
                questions = questionsData.random();
            } else if (testKey === 'review') {
                questions = questionsData.review();
            } else {
                questions = questionsData[testKey];
            }

            if (!questions || questions.length === 0) {
                console.error('No questions available for the selected test');
                return;
            }

            setSelectedTest(testKey);
            setTestMode(mode);
            setCurrentQuestions(questions);
            setCurrentView('test');
        } catch (error) {
            console.error('Error loading test:', error);
        }
    };

    const handleTestSubmit = (answers) => {
        try {
            setUserAnswers(answers);
            const correctAnswers = currentQuestions.reduce((count, question) => {
                const userAnswer = answers[question.id];
                if (userAnswer && JSON.stringify(question.correctAnswer.sort()) === JSON.stringify(userAnswer.sort())) {
                    return count + 1;
                }
                return count;
            }, 0);
            const scorePercentage = Math.round((correctAnswers / currentQuestions.length) * 100);
            setScore(scorePercentage);
            setCurrentView('results');
        } catch (error) {
            console.error('Error submitting test:', error);
        }
    };

    const handleRetakeTest = () => {
        setCurrentView('test');
        setUserAnswers(null);
        setScore(null);
    };

    const handleBackToSelection = () => {
        setCurrentView('selection');
        setSelectedTest(null);
        setTestMode(null);
        setUserAnswers(null);
        setScore(null);
        setCurrentQuestions(null);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {currentView === 'selection' && (
                <TestSelection onSelectTest={handleSelectTest} />
            )}
            {currentView === 'test' && currentQuestions && (
                <Test
                    questions={currentQuestions}
                    onTestSubmit={handleTestSubmit}
                    onBackToSelection={handleBackToSelection}
                    testMode={testMode}
                />
            )}
            {currentView === 'results' && currentQuestions && (
                <Results
                    questions={currentQuestions}
                    userAnswers={userAnswers}
                    score={score}
                    onRetakeTest={handleRetakeTest}
                    onBackToSelection={handleBackToSelection}
                    testMode={testMode}
                />
            )}
        </div>
    );
}

export default App; 