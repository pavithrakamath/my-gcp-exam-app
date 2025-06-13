import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test from './Test';

// Mock questions data
const mockQuestions = [
  {
    id: 1,
    questionText: "What is Google Cloud Platform?",
    options: [
      "A cloud computing platform",
      "A database service",
      "A web hosting service",
      "A programming language"
    ],
    correctAnswer: [0],
    explanation: "GCP is a cloud computing platform"
  },
  {
    id: 2,
    questionText: "Which service is used for serverless computing in GCP?",
    options: [
      "Compute Engine",
      "Cloud Functions",
      "Cloud Storage",
      "Cloud SQL"
    ],
    correctAnswer: [1],
    explanation: "Cloud Functions is the serverless computing service"
  }
];

// Mock functions
const mockOnTestSubmit = jest.fn();
const mockOnBackToSelection = jest.fn();

describe('Test Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders test component with questions', () => {
    render(
      <Test
        questions={mockQuestions}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="practice"
      />
    );

    // Check if first question is rendered
    expect(screen.getByText(mockQuestions[0].questionText)).toBeInTheDocument();
    expect(screen.getByText('Question 1 of 2')).toBeInTheDocument();
  });

  test('handles option selection in practice mode', () => {
    render(
      <Test
        questions={mockQuestions}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="practice"
      />
    );

    // Select an option
    const option = screen.getByText(mockQuestions[0].options[0]);
    fireEvent.click(option);

    // Check if feedback is shown (in practice mode)
    expect(screen.getByText(mockQuestions[0].explanation)).toBeInTheDocument();
  });

  test('navigates between questions', () => {
    render(
      <Test
        questions={mockQuestions}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="practice"
      />
    );

    // Check initial question
    expect(screen.getByText(mockQuestions[0].questionText)).toBeInTheDocument();

    // Click next
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    // Check second question
    expect(screen.getByText(mockQuestions[1].questionText)).toBeInTheDocument();

    // Click previous
    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);

    // Check if back to first question
    expect(screen.getByText(mockQuestions[0].questionText)).toBeInTheDocument();
  });

  test('handles test submission', () => {
    render(
      <Test
        questions={mockQuestions}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="practice"
      />
    );

    // Select answers for both questions
    const option1 = screen.getByText(mockQuestions[0].options[0]);
    fireEvent.click(option1);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    const option2 = screen.getByText(mockQuestions[1].options[1]);
    fireEvent.click(option2);

    // Submit test
    const submitButton = screen.getByText('Submit Test');
    fireEvent.click(submitButton);

    // Check if onTestSubmit was called with correct answers
    expect(mockOnTestSubmit).toHaveBeenCalledWith({
      1: [0],
      2: [1]
    });
  });

  test('handles back to selection', () => {
    render(
      <Test
        questions={mockQuestions}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="practice"
      />
    );

    const backButton = screen.getByText('← Back to Selection');
    fireEvent.click(backButton);

    expect(mockOnBackToSelection).toHaveBeenCalled();
  });

  test('shows timer in exam mode', () => {
    jest.useFakeTimers();
    
    render(
      <Test
        questions={mockQuestions}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="exam"
      />
    );

    // Check if timer is displayed
    expect(screen.getByText(/Time Remaining:/)).toBeInTheDocument();

    // Advance timer by 1 minute
    act(() => {
      jest.advanceTimersByTime(60000);
    });

    // Check if timer updated
    expect(screen.getByText(/Time Remaining: 59:/)).toBeInTheDocument();

    jest.useRealTimers();
  });

  test('handles empty questions array', () => {
    render(
      <Test
        questions={[]}
        onTestSubmit={mockOnTestSubmit}
        onBackToSelection={mockOnBackToSelection}
        testMode="practice"
      />
    );

    expect(screen.getByText('No Questions Available')).toBeInTheDocument();
  });
}); 