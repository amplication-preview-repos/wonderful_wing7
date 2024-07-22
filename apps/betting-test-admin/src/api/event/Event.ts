import { Bet } from "../bet/Bet";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  sport?: "Option1" | null;
  name: string | null;
  team1: string | null;
  team2: string | null;
  bets?: Array<Bet>;
};
