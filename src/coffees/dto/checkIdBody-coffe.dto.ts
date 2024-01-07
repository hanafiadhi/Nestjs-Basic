import { Transform, Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsMongoId,
  IsInt,
  IsArray,
  MaxLength,
  ValidateNested,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  maxLength,
  MinLength,
  IsPositive,
  Min,
  Max,
} from 'class-validator';
import { Types } from 'mongoose';
import {
  MongoIdPipe,
  SafeMongoIdTransform,
} from 'src/common/pipe/mongo-id/mongo-id.pipe';

export class NestedValidationObject {
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  @IsString()
  age: string;
}

export class NestedValidationArrayObjet {
  @IsString({ message: 'note string' })
  note: string;
}
export class checkId {
  //   @IsMongoId()
  @IsNotEmpty()
  @Transform((value) => SafeMongoIdTransform(value))
  city: string;

  @IsNotEmpty()
  @IsMongoId()
  province: string;

  @IsNotEmpty()
  @IsString({ message: 'name kata kata bolo' })
  @MaxLength(20)
  @MinLength(20)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  @Max(10)
  whatsapp: number;

  //   @IsString({ each: true, message: 'arrayString must be array string' })
  //   arrayString: string[];

  //   @IsDefined()
  //   @IsNotEmptyObject()
  //   @IsObject()
  //   @ValidateNested({ each: true })
  //   @Type(() => NestedValidationObject)
  //   object: NestedValidationObject;

  //   @MaxLength(20, {
  //     each: true,
  //     message: 'tags must be adhadhadlai',
  //   })
  //   tags: Set<string>;

  //   @ValidateNested({ each: true })
  //   @Type(() => NestedValidationArrayObjet)
  //   arrayField: NestedValidationArrayObjet[];
}
