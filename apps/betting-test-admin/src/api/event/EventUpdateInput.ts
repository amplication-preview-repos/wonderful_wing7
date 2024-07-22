import { BetUpdateManyWithoutEventsInput } from "./BetUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  sport?: "Option1" | null;
  name?: string | null;
  team1?: string | null;
  team2?: string | null;
  bets?: BetUpdateManyWithoutEventsInput;
};
