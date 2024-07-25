import { Exchange } from "../exchange/Exchange";
import { Company } from "../company/Company";

export type Stock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  exchange?: Exchange | null;
  tickerSymbol: string | null;
  sharePrice: number | null;
  totalShares: number | null;
  company?: Company | null;
};
