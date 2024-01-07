import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeDto } from './dto/create-coffe.dto.ts';
import { UpdateCoffeDto } from './dto/update-coffe.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { IdParamDto } from './dto/checkId-coffe.dto';
import { MongoIdPipe } from 'src/common/pipe/mongo-id/mongo-id.pipe';
import { checkId } from './dto/checkIdBody-coffe.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeesService: CoffeesService, // @Inject(REQUEST) private readonly request: Request,
  ) {
    // console.log(request);
    console.log('CoffeController is Created');
  }

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string, @Body() payload: checkId) {
    console.log(id);
    console.log(payload.city);
    // console.log(province);
    // console.log(province);
    // console.log(payload.arrayField[0].note);

    return id;
    // return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeDto: CreateCoffeDto) {
    console.log(createCoffeDto instanceof CreateCoffeDto);

    return createCoffeDto;
    return this.coffeesService.create(createCoffeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() UpdateCoffeDto: UpdateCoffeDto) {
    return typeof id;
    // return this.coffeesService.update(id, UpdateCoffeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
