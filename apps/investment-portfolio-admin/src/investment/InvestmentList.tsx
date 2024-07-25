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
import { INVESTOR_TITLE_FIELD } from "../investor/InvestorTitle";

export const InvestmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Investments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Investor"
          source="investor.id"
          reference="Investor"
        >
          <TextField source={INVESTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="stockId" source="stockId" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
