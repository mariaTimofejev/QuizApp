import { type Question } from "../data/questions";

type Props = {
  question: Question;
  onAnswer: (index: number) => void;
};

const QuestionCard = ({ question, onAnswer }: Props) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      {question.options.map((opt, idx) => (
        <button
          key={idx}
          className="option-button"
          onClick={() => onAnswer(idx)}
          data-testid={`option-${idx}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;