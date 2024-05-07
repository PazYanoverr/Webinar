import { StockUpdateManyWithoutExchangesInput } from "./StockUpdateManyWithoutExchangesInput";

export type ExchangeUpdateInput = {
  address?: string | null;
  name?: string | null;
  stocks?: StockUpdateManyWithoutExchangesInput;
};
