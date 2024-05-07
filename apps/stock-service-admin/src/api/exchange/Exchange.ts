import { Stock } from "../stock/Stock";

export type Exchange = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  stocks?: Array<Stock>;
  updatedAt: Date;
};
