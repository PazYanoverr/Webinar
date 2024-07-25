import { Investment } from "../investment/Investment";

export type Investor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  bankAccount: string | null;
  investments?: Array<Investment>;
};
