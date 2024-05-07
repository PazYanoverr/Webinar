import { StringFilter } from "../../util/StringFilter";
import { InvestorWhereUniqueInput } from "../investor/InvestorWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type InvestmentWhereInput = {
  id?: StringFilter;
  investor?: InvestorWhereUniqueInput;
  quantity?: IntNullableFilter;
  stockId?: StringNullableFilter;
  value?: DecimalNullableFilter;
};
