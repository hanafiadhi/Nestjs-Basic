import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCoffeDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavours: string[];
}
