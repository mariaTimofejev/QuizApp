export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Milline neist on Eesti rahvuslill?",
    options: ["Rukkilill", "Sinilill", "Karikakar"],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "Mitu maakonda on Eestis?",
    options: ["10", "15", "13"],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "Mis on Statistikaameti põhiülesanne?",
    options: [
      "Maksude kogumine",
      "Statistiliste andmete kogumine ja avaldamine",
      "Kohtulahendite tegemine",
    ],
    correctIndex: 1,
  },
];