import { Investor } from "../investor/Investor";
import { Decimal } from "decimal.js";

export type Investment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  investor?: Investor | null;
  stockId: string | null;
  quantity: number | null;
  value: Decimal | null;
};
