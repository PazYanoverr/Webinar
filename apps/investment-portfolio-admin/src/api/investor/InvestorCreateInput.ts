import { InvestmentCreateNestedManyWithoutInvestorsInput } from "./InvestmentCreateNestedManyWithoutInvestorsInput";

export type InvestorCreateInput = {
  name?: string | null;
  address?: string | null;
  bankAccount?: string | null;
  investments?: InvestmentCreateNestedManyWithoutInvestorsInput;
};
