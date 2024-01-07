import { IsInt, IsMongoId, IsNumber } from 'class-validator';

export class IdParamDto {
  @IsInt()
  id: number;
}
