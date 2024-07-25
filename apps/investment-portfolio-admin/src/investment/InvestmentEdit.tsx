import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { InvestorTitle } from "../investor/InvestorTitle";

export const InvestmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="investor.id"
          reference="Investor"
          label="Investor"
        >
          <SelectInput optionText={InvestorTitle} />
        </ReferenceInput>
        <TextInput label="stockId" source="stockId" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
