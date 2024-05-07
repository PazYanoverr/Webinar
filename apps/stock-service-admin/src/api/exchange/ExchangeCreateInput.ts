import { StockCreateNestedManyWithoutExchangesInput } from "./StockCreateNestedManyWithoutExchangesInput";

export type ExchangeCreateInput = {
  address?: string | null;
  name?: string | null;
  stocks?: StockCreateNestedManyWithoutExchangesInput;
};
