import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  exchangeId?: SortOrder;
  id?: SortOrder;
  sharePrice?: SortOrder;
  tickerSymbol?: SortOrder;
  totalShares?: SortOrder;
  updatedAt?: SortOrder;
};
