export interface ResponseApiMonster {
  results: Monster[];
  count: number;
  next: string | null;
  previous: string | null;
};

export interface Monster {
  name: string;
  size: string;
  alignment: string;
};
