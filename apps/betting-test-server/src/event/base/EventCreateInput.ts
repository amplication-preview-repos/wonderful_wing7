/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEventSport } from "./EnumEventSport";
import { BetCreateNestedManyWithoutEventsInput } from "./BetCreateNestedManyWithoutEventsInput";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumEventSport,
  })
  @IsEnum(EnumEventSport)
  @IsOptional()
  @Field(() => EnumEventSport, {
    nullable: true,
  })
  sport?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  team1?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  team2?: string | null;

  @ApiProperty({
    required: false,
    type: () => BetCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => BetCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => BetCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  bets?: BetCreateNestedManyWithoutEventsInput;
}

export { EventCreateInput as EventCreateInput };
