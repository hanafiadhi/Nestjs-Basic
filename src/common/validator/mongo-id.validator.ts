import { BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';
export const SafeMongoIdTransform = ({ value, key }) => {
  try {
    if (Types.ObjectId.isValid(value)) {
      return new Types.ObjectId(value);
    }
    throw new BadRequestException('Id validation fail');
  } catch (error) {
    throw new BadRequestException(`validation vailed. ${key} must be Mongo ID`);
  }
};
