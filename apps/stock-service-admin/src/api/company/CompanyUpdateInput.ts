import { StockUpdateManyWithoutCompaniesInput } from "./StockUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string | null;
  headquarters?: string | null;
  stocks?: StockUpdateManyWithoutCompaniesInput;
  domain?: string | null;
};
