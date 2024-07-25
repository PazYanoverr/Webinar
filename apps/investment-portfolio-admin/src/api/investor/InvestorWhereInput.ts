import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InvestmentListRelationFilter } from "../investment/InvestmentListRelationFilter";

export type InvestorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  investments?: InvestmentListRelationFilter;
};
