import { IsString } from 'class-validator';

export class Toy {
  @IsString()
  name: string;
  @IsString()
  size: string;
  @IsString()
  color: string;
}
