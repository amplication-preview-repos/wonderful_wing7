import { BetCreateNestedManyWithoutEventsInput } from "./BetCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  sport?: "Option1" | null;
  name?: string | null;
  team1?: string | null;
  team2?: string | null;
  bets?: BetCreateNestedManyWithoutEventsInput;
};
