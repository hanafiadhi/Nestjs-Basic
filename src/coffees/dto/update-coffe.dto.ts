import { PartialType } from '@nestjs/mapped-types';

import { CreateCoffeDto } from './create-coffe.dto.ts';

export class UpdateCoffeDto extends PartialType(CreateCoffeDto) {}
