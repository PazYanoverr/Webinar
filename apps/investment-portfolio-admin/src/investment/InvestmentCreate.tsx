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

import { InvestorTitle } from "../investor/InvestorTitle";

export const InvestmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="investor.id"
          reference="Investor"
          label="Investor"
        >
          <SelectInput optionText={InvestorTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="stockId" source="stockId" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
