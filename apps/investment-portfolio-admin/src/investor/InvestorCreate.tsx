import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InvestmentTitle } from "../investment/InvestmentTitle";

export const InvestorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Address" multiline source="address" />
        <TextInput label="Bank Account" source="bankAccount" />
        <ReferenceArrayInput
          source="investments"
          reference="Investment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvestmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
