export interface CardData {
  id: number;
  //   userId: number;
  number: string;
  expiry: {
    month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    year: 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033;
  };
}

export const cardData: CardData[] = [
  {
    id: 1,
    number: "9959 0067 4451 4166",
    expiry: {
      month: 6,
      year: 2028,
    },
    //    userId: 1
  },
];
