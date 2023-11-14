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

  const [currentQuestion, setCurrentQuestion] = useState(0); //zero because it is beginning at the first index of the array
  const [showScore, setShowScore] = useState(false); // false because we don't want it to show unless the game is over - gone through all the questions
  const [score, setScore] = useState(0); // zero because we begin with zero to start counting

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1); //score starts at zero, if it is true add one
    }
    const nextQuestion = currentQuestion + 1; //currentQuestion starts at position zero on the array - add one to 'move' to next question
    if (nextQuestion < triviaQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); //set to true because all questions have been answered, so total score can be displayed
    }
  };

  return (
    <div className="app">
      {/* ternary operator: condition ? trueExpression : falseExpression  */}
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
