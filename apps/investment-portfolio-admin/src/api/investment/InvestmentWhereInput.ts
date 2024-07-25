import { StringFilter } from "../../util/StringFilter";
import { InvestorWhereUniqueInput } from "../investor/InvestorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type InvestmentWhereInput = {
  id?: StringFilter;
  investor?: InvestorWhereUniqueInput;
  stockId?: StringNullableFilter;
  quantity?: IntNullableFilter;
  value?: DecimalNullableFilter;
};
