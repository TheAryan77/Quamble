import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuestionCard from "./QuestionCard";

const demoquiz = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'],
  },
  {
    question: 'How many continents are there on Earth?',
    options: ['Seven', 'Six', 'Five', 'Eight'],
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
  },
  {
    question: 'Which year did the Titanic sink?',
    options: ['1912', '1905', '1921', '1899'],
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    options: ['Diamond', 'Gold', 'Iron', 'Granite'],
  },
  {
    question: 'Who is known as the father of modern physics?',
    options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Niels Bohr'],
  },
  {
    question: 'What is the smallest country in the world by area?',
    options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
  },
];

const QuizCard = () => {
  const { theme } = useParams(); 
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuizQuestions = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate-quiz", {
        theme: theme,
      });

      const fetchedQuiz = response.data.quiz;

      if (fetchedQuiz && fetchedQuiz.length > 0) {
        setQuizQuestions(fetchedQuiz);
      } else {
        setError("No questions available.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setQuizQuestions(demoquiz); 
      setError(`Failed to load quiz questions for ${theme}. Showing demo questions instead.`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizQuestions();
  }, [theme]);

  const handleAnswerChange = (answer) => {
    console.log(`Selected answer: ${answer}`);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizQuestions.length));
  };

  const handleSubmit = () => {
    console.log("Quiz submitted");
  };

  if (loading) return <div>Loading quiz questions...</div>;

  return (
    <div>
      {error && (
        <div>
          <h2 className="text-xl font-semibold mb-4">{error}</h2>
          <p>Here are some demo questions:</p>
        </div>
      )}
      <QuestionCard
        question={quizQuestions[currentQuestion - 1]?.question}
        options={quizQuestions[currentQuestion - 1]?.options}
        currentQuestion={currentQuestion}
        theme={theme}
        totalQuestions={quizQuestions.length}
        onAnswerChange={handleAnswerChange}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default QuizCard;
