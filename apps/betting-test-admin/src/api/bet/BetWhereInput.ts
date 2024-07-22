import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type BetWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  odds?: FloatNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
  event?: EventWhereUniqueInput;
};
