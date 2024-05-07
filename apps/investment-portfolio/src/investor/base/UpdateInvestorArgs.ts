/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvestorWhereUniqueInput } from "./InvestorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InvestorUpdateInput } from "./InvestorUpdateInput";

@ArgsType()
class UpdateInvestorArgs {
  @ApiProperty({
    required: true,
    type: () => InvestorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvestorWhereUniqueInput)
  @Field(() => InvestorWhereUniqueInput, { nullable: false })
  where!: InvestorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InvestorUpdateInput,
  })
  @ValidateNested()
  @Type(() => InvestorUpdateInput)
  @Field(() => InvestorUpdateInput, { nullable: false })
  data!: InvestorUpdateInput;
}

export { UpdateInvestorArgs as UpdateInvestorArgs };