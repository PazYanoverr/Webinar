import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ExchangeTitle } from "../exchange/ExchangeTitle";
import { CompanyTitle } from "../company/CompanyTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="exchange.id"
          reference="Exchange"
          label="Exchange"
        >
          <SelectInput optionText={ExchangeTitle} />
        </ReferenceInput>
        <TextInput label="Ticker Symbol" source="tickerSymbol" />
        <NumberInput label="Share Price" source="sharePrice" />
        <NumberInput step={1} label="Total Shares" source="totalShares" />
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
