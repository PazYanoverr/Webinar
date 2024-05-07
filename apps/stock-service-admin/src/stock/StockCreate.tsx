import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { ExchangeTitle } from "../exchange/ExchangeTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="exchange.id"
          reference="Exchange"
          label="Exchange"
        >
          <SelectInput optionText={ExchangeTitle} />
        </ReferenceInput>
        <NumberInput label="Share Price" source="sharePrice" />
        <TextInput label="Ticker Symbol" source="tickerSymbol" />
        <NumberInput step={1} label="Total Shares" source="totalShares" />
      </SimpleForm>
    </Create>
  );
};
