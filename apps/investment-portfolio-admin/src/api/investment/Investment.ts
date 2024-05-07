import { Investor } from "../investor/Investor";
import { Decimal } from "decimal.js";

export type Investment = {
  createdAt: Date;
  id: string;
  investor?: Investor | null;
  quantity: number | null;
  stockId: string | null;
  updatedAt: Date;
  value: Decimal | null;
};
