import { Stock } from "../stock/Stock";

export type Exchange = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  name: string | null;
  stocks?: Array<Stock>;
};
