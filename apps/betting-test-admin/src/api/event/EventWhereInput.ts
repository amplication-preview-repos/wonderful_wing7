import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  sport?: "Option1";
  name?: StringNullableFilter;
  team1?: StringNullableFilter;
  team2?: StringNullableFilter;
  bets?: BetListRelationFilter;
};
