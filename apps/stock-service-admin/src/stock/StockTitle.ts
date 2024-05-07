import { Stock as TStock } from "../api/stock/Stock";

export const STOCK_TITLE_FIELD = "tickerSymbol";

export const StockTitle = (record: TStock): string => {
  return record.tickerSymbol?.toString() || String(record.id);
};
