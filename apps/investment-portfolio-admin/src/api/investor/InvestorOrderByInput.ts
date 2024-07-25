import { SortOrder } from "../../util/SortOrder";

export type InvestorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  bankAccount?: SortOrder;
};
