import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  headquarters?: SortOrder;
  domain?: SortOrder;
};
