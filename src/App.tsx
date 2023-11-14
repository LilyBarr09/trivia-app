import { useState } from "react";
import "./App.css";

function App() {
  const triviaQuestions = [
    {
      question: "What video game was the first ever to be played in space?",
      answerOptions: [
        { answerText: "Super Mario Bros", isCorrect: false },
        { answerText: "The Legend of Zelda", isCorrect: false },
        { answerText: "Street Fighter II", isCorrect: false },
        { answerText: "Tetris", isCorrect: true },
        { answerText: "Pokemon Red and Blue", isCorrect: false },
      ],
    },
    {
      question: "What geometric shape is generally used for stop signs?",
      answerOptions: [
        { answerText: "Parallelogram", isCorrect: false },
        { answerText: "Circle", isCorrect: false },
        { answerText: "Triangle", isCorrect: false },
        { answerText: "Cube", isCorrect: false },
        { answerText: "Octagon", isCorrect: true },
      ],
    },
    {
      question: "What is the name of the largest ocean?",
      answerOptions: [
        { answerText: "Atlantic Ocean", isCorrect: false },
        { answerText: "Pacific Ocean", isCorrect: true },
        { answerText: "Southern Ocean", isCorrect: false },
        { answerText: "Artic Ocean", isCorrect: false },
        { answerText: "Indian Ocean", isCorrect: false },
      ],
    },
    {
      question: "What is the rarest M&M color?",
      answerOptions: [
        { answerText: "Brown", isCorrect: true },
        { answerText: "Red", isCorrect: false },
        { answerText: "Green", isCorrect: false },
        { answerText: "Blue", isCorrect: false },
        { answerText: "Magenta", isCorrect: false },
      ],
    },
    {
      question: "How many colors are there in the rainbow?",
      answerOptions: [
        { answerText: 5, isCorrect: false },
        { answerText: 7, isCorrect: true },
        { answerText: 3, isCorrect: false },
        { answerText: 8, isCorrect: false },
        { answerText: 2, isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < triviaQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {triviaQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/
              {triviaQuestions.length}
            </div>
            <div className="question-text">
              {triviaQuestions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {triviaQuestions[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
