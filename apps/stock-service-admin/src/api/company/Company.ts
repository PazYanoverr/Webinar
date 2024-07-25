import { Stock } from "../stock/Stock";

export type Company = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  headquarters: string | null;
  stocks?: Array<Stock>;
  domain: string | null;
};
