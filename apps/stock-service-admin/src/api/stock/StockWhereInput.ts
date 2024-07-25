import { StringFilter } from "../../util/StringFilter";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type StockWhereInput = {
  id?: StringFilter;
  exchange?: ExchangeWhereUniqueInput;
  tickerSymbol?: StringNullableFilter;
  sharePrice?: FloatNullableFilter;
  totalShares?: IntNullableFilter;
  company?: CompanyWhereUniqueInput;
};
