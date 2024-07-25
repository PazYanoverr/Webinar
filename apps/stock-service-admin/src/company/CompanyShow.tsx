import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EXCHANGE_TITLE_FIELD } from "../exchange/ExchangeTitle";
import { COMPANY_TITLE_FIELD } from "./CompanyTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Headquarters" source="headquarters" />
        <TextField label="Domain" source="domain" />
        <ReferenceManyField reference="Stock" target="companyId" label="Stocks">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Exchange"
              source="exchange.id"
              reference="Exchange"
            >
              <TextField source={EXCHANGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Ticker Symbol" source="tickerSymbol" />
            <TextField label="Share Price" source="sharePrice" />
            <TextField label="Total Shares" source="totalShares" />
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
