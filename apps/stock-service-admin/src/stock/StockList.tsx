import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXCHANGE_TITLE_FIELD } from "../exchange/ExchangeTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const StockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stocks"}
      perPage={50}
      pagination={<Pagination />}
    >
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
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
