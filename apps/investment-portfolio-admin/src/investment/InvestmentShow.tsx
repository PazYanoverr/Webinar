import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INVESTOR_TITLE_FIELD } from "../investor/InvestorTitle";

export const InvestmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
