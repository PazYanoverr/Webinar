import { InvestmentUpdateManyWithoutInvestorsInput } from "./InvestmentUpdateManyWithoutInvestorsInput";

export type InvestorUpdateInput = {
  address?: string | null;
  bankAccount?: string | null;
  investments?: InvestmentUpdateManyWithoutInvestorsInput;
  name?: string | null;
};
