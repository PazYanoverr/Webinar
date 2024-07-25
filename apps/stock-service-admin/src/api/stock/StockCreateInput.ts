import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type StockCreateInput = {
  exchange?: ExchangeWhereUniqueInput | null;
  tickerSymbol?: string | null;
  sharePrice?: number | null;
  totalShares?: number | null;
  company?: CompanyWhereUniqueInput | null;
};
