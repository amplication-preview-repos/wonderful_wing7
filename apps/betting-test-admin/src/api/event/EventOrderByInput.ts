import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  sport?: SortOrder;
  name?: SortOrder;
  team1?: SortOrder;
  team2?: SortOrder;
};
