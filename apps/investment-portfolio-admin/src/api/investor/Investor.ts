import { Investment } from "../investment/Investment";

export type Investor = {
  address: string | null;
  bankAccount: string | null;
  createdAt: Date;
  id: string;
  investments?: Array<Investment>;
  name: string | null;
  updatedAt: Date;
};
