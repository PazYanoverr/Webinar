import { InvestmentCreateNestedManyWithoutInvestorsInput } from "./InvestmentCreateNestedManyWithoutInvestorsInput";

export type InvestorCreateInput = {
  address?: string | null;
  bankAccount?: string | null;
  investments?: InvestmentCreateNestedManyWithoutInvestorsInput;
  name?: string | null;
};
