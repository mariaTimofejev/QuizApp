import { useState } from "react";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import ResultTable from "./components/ResultTable";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [color, setColor] = useState("");

  const restartQuiz = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
    setFeedback("");
    setColor("");
  };

  const handleAnswer = (index: number) => {
    const correct = questions[currentIndex].correctIndex;

    if (index === correct) {
      setFeedback("Õige vastus!");
      setColor("green");
    } else {
      setFeedback("Vale vastus!");
      setColor("red");
    }

    const newAnswers = [...answers, index];
    setAnswers(newAnswers);
  };

  const goToNext = () => {
    setFeedback("");
    setColor("");

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const results = questions.map((q, i) => {
    const selectedIndex = answers[i];

    return {
      question: q.question,
      selected: q.options[selectedIndex],
      correct: q.options[q.correctIndex],
      isCorrect: selectedIndex === q.correctIndex,
    };
  });

  const score = results.filter((r) => r.isCorrect).length;

  return (
    <div className="app">
      <h1>Viktoriin</h1>

      {!finished ? (
        <>
          <p>
            Küsimus {currentIndex + 1} / {questions.length}
          </p>

          <progress value={currentIndex + 1} max={questions.length} />

          <QuestionCard
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
          />

          {feedback && (
            <>
              <p data-testid="feedback" style={{ color, fontWeight: "bold" }}>
                {feedback}
              </p>
              <button data-testid="next" onClick={goToNext}>
                Järgmine
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <h2>Skoor: {score} / {questions.length}</h2>

          <ResultTable results={results} />

          <button className="restart-btn" onClick={restartQuiz}>
            Alusta uuesti
          </button>
        </>
      )}
    </div>
  );
}

export default App;