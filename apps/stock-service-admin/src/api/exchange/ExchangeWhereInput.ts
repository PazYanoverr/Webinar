import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type ExchangeWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  stocks?: StockListRelationFilter;
};
