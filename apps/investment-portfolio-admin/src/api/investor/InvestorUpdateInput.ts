import { InvestmentUpdateManyWithoutInvestorsInput } from "./InvestmentUpdateManyWithoutInvestorsInput";

export type InvestorUpdateInput = {
  name?: string | null;
  address?: string | null;
  bankAccount?: string | null;
  investments?: InvestmentUpdateManyWithoutInvestorsInput;
};
