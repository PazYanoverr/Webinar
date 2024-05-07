import { InvestorWhereUniqueInput } from "../investor/InvestorWhereUniqueInput";
import { Decimal } from "decimal.js";

export type InvestmentCreateInput = {
  investor?: InvestorWhereUniqueInput | null;
  quantity?: number | null;
  stockId?: string | null;
  value?: Decimal | null;
};
