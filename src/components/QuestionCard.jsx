import React, { useState, useEffect } from 'react';
import { runConfettiEffect } from '../script/confettiEffect';
import axios from 'axios';

const QuestionCard = ({ 
  question, 
  options, 
  currentQuestion, 
  totalQuestions, 
  onAnswerChange, 
  onNext, 
  onSubmit, 
  quizId, 
  theme 
}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const [responses, setResponses] = useState([]); 
  const [score, setScore] = useState(null); 

  useEffect(() => {
    setSelectedOption('');
    setTimeLeft(10); 

    let timerExpired = false; 
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1 && !timerExpired) {
          clearInterval(timer);
          timerExpired = true; 
          onNext(); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      timerExpired = true; 
    };
  }, [question, onNext]); 

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onAnswerChange(option);

    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestion - 1] = option; 
      return updatedResponses;
    });
  };

  const handleSubmit = async () => {
    setShowModal(true);

    const quizData = {
      quiz_id: quizId, 
      user_response: responses, 
      theme: theme,
    };

    try {
      const response = await axios.post('/api/submit-quiz', quizData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Quiz submitted successfully:', response.data);

        const { score, quiz_id } = response.data; 
        setScore(score); 
        runConfettiEffect(); 
        onSubmit({ score, quiz_id }); 
      } else {
        console.error('Error submitting quiz:', response.data);
        alert(response.data.error || 'An error occurred while submitting the quiz.');
      }
    } catch (error) {
      // Handle any errors
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred.');
    }

    setShowModal(false); 
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-5 m-7 border border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">
          Question {currentQuestion} of {totalQuestions}
        </div>
        <div className="text-red-500 font-bold">
          {timeLeft}s left
        </div>
      </div>

      {/* Question */}
      <div className="mb-4 text-gray-700">
        <p>{question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2 mb-6 flex flex-col gap-1">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2 border-gray-400 border-2 p-3 rounded-xl">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="form-radio text-blue-500"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end">
        {currentQuestion < totalQuestions ? (
          <button
            onClick={onNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-700">Are you sure you want to submit the quiz?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show score after submission */}
      {score !== null && (
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold">Your Score: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
