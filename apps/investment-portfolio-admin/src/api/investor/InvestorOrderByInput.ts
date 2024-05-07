import { SortOrder } from "../../util/SortOrder";

export type InvestorOrderByInput = {
  address?: SortOrder;
  bankAccount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
