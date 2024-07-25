import { InvestorWhereUniqueInput } from "../investor/InvestorWhereUniqueInput";
import { Decimal } from "decimal.js";

export type InvestmentUpdateInput = {
  investor?: InvestorWhereUniqueInput | null;
  stockId?: string | null;
  quantity?: number | null;
  value?: Decimal | null;
};
