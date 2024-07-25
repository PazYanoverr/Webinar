import { StockCreateNestedManyWithoutCompaniesInput } from "./StockCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name?: string | null;
  headquarters?: string | null;
  stocks?: StockCreateNestedManyWithoutCompaniesInput;
  domain?: string | null;
};
