import { JsonValue } from "type-fest";
import { Bet } from "../bet/Bet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  bets?: Array<Bet>;
};
