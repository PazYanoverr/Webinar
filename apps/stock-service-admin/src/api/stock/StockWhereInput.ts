import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StockWhereInput = {
  company?: CompanyWhereUniqueInput;
  exchange?: ExchangeWhereUniqueInput;
  id?: StringFilter;
  sharePrice?: FloatNullableFilter;
  tickerSymbol?: StringNullableFilter;
  totalShares?: IntNullableFilter;
};
