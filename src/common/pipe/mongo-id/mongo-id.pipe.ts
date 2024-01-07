import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: string, metadata?: ArgumentMetadata) {
    console.log(metadata);
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException(
        `validation vailed. ${metadata.data} must be Mongo ID`,
      );
    }
    return new Types.ObjectId(value);
  }
}

export const SafeMongoIdTransform = ({ value, key }) => {
  try {
    console.log(value);

    if (Types.ObjectId.isValid(value)) {
      return new Types.ObjectId(value);
    }
    throw new BadRequestException('Id validation fail');
  } catch (error) {
    throw new BadRequestException(`validation vailed. ${key} must be Mongo ID`);
  }
};
