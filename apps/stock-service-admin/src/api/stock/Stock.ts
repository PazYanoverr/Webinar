import { Company } from "../company/Company";
import { Exchange } from "../exchange/Exchange";

export type Stock = {
  company?: Company | null;
  createdAt: Date;
  exchange?: Exchange | null;
  id: string;
  sharePrice: number | null;
  tickerSymbol: string | null;
  totalShares: number | null;
  updatedAt: Date;
};
