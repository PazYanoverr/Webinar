import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type ExchangeWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  name?: StringNullableFilter;
  stocks?: StockListRelationFilter;
};
