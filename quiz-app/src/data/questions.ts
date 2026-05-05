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
    question: "Mis loom on Eesti rahvusloom?",
    options: [
      "Karu",
      "Rebane",
      "Hunt",
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    question: "Milline meri piirab Eestit?",
    options: ["Vahemeri", "Must meri", "Läänemeri"],
    correctIndex: 2,
  },
  {
    id: 5,
    question: "Kes on Eesti rahvuseepose „Kalevipoeg” autor?",
    options: ["Lydia Koidula", "Friedrich Reinhold Kreutzwald", "Anton Hansen Tammsaare"],
    correctIndex: 1,
  }
];