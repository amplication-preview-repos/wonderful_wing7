import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type BetCreateInput = {
  amount?: number | null;
  odds?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
};
