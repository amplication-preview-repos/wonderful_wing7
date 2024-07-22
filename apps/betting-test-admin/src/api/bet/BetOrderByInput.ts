import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  odds?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  eventId?: SortOrder;
};
