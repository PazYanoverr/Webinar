import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvestmentListRelationFilter } from "../investment/InvestmentListRelationFilter";

export type InvestorWhereInput = {
  address?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  id?: StringFilter;
  investments?: InvestmentListRelationFilter;
  name?: StringNullableFilter;
};
