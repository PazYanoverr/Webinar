import { Investment as TInvestment } from "../api/investment/Investment";

export const INVESTMENT_TITLE_FIELD = "stockId";

export const InvestmentTitle = (record: TInvestment): string => {
  return record.stockId?.toString() || String(record.id);
};
