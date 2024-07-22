import { User } from "../user/User";
import { Event } from "../event/Event";

export type Bet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  odds: number | null;
  status?: "Option1" | null;
  user?: User | null;
  event?: Event | null;
};
