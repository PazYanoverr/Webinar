import { InvestorWhereUniqueInput } from "../investor/InvestorWhereUniqueInput";
import { Decimal } from "decimal.js";

export type InvestmentCreateInput = {
  investor?: InvestorWhereUniqueInput | null;
  stockId?: string | null;
  quantity?: number | null;
  value?: Decimal | null;
};
