type ResultRow = {
  question: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
};

type Props = {
  results: ResultRow[];
};

const ResultTable = ({ results }: Props) => {
  return (
    <div>
      <h2>Tulemused</h2>

      <table>
        <thead>
          <tr>
            <th>Küsimus</th>
            <th>Sinu vastus</th>
            <th>Õige vastus</th>
            <th>Tulemus</th>
          </tr>
        </thead>

        <tbody>
          {results.map((row, i) => (
            <tr key={i}>
              <td>{row.question}</td>
              <td>{row.selected}</td>
              <td>{row.correct}</td>
              <td>{row.isCorrect ? "Õige" : "Vale"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;