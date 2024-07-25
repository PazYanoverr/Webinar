import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  exchangeId?: SortOrder;
  tickerSymbol?: SortOrder;
  sharePrice?: SortOrder;
  totalShares?: SortOrder;
  companyId?: SortOrder;
};
