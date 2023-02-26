import { Type } from 'class-transformer';
import {
  IsString,
  IsInt,
  IsArray,
  isString,
  ValidateNested,
} from 'class-validator';
import { Toy } from './create-toy.dto';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Toy)
  toys: Toy[];

  @IsString()
  color: string;
}
