import React from 'react';

const TestSelection = ({ onSelectTest }) => {
    const handleStartTest = (testKey, mode) => {
        onSelectTest(testKey, mode);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">GCP Exam Practice</h1>
            
            {/* Practice Tests Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Practice Tests</h2>
                <div className="grid gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 1</h3>
                        <p className="text-gray-600 mb-4">
                            Test your knowledge of Google Cloud Platform fundamentals with this practice test.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test1', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test1', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 2</h3>
                        <p className="text-gray-600 mb-4">
                            Advanced GCP concepts and scenarios for experienced cloud professionals.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test2', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test2', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 3</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive test covering all aspects of Google Cloud Platform.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test3', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test3', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 4</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive test covering all aspects of Google Cloud Platform.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test4', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test4', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 5</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive test covering all aspects of Google Cloud Platform.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test5', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test5', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 6</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive test covering all aspects of Google Cloud Platform.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test6', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test6', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Practice Test 7</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive test covering all aspects of Google Cloud Platform.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStartTest('test7', 'exam')}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Start Exam Mode
                            </button>
                            <button
                                onClick={() => handleStartTest('test7', 'practice')}
                                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Start Practice Mode
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Practice Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-6">Quick Practice</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Random Questions</h3>
                        <p className="text-gray-600 mb-4">
                            Practice with randomly selected questions from all tests.
                        </p>
                        <button
                            onClick={() => handleStartTest('random', 'practice')}
                            className="w-full bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
                        >
                            Start Random Practice
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Review Mode</h3>
                        <p className="text-gray-600 mb-4">
                            Review all questions with explanations and no time limit.
                        </p>
                        <button
                            onClick={() => handleStartTest('review', 'practice')}
                            className="w-full bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors"
                        >
                            Start Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestSelection; 