import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  headquarters?: StringNullableFilter;
  stocks?: StockListRelationFilter;
  domain?: StringNullableFilter;
};
