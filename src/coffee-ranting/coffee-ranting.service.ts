import { Inject, Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class CoffeeRantingService {
  constructor(
    @Inject('hanafi') private readonly rmqService1: {},
    @Inject('zainul') private readonly rmqService2: {},
    private readonly coffeesService: CoffeesService,
  ) {
    console.log(rmqService1);
    console.log(rmqService2);
  }
}
