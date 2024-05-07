import { SortOrder } from "../../util/SortOrder";

export type InvestmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  investorId?: SortOrder;
  quantity?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
