import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";

export type StockCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  exchange?: ExchangeWhereUniqueInput | null;
  sharePrice?: number | null;
  tickerSymbol?: string | null;
  totalShares?: number | null;
};
