import { Module } from '@nestjs/common';
import { CoffeeRantingService } from './coffee-ranting.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { RmqModule } from 'src/rmq/rmq.module';
import { CoffeesService } from 'src/coffees/coffees.service';

@Module({
  imports: [
    RmqModule.register({ name: 'hanafi', age: 40 }),
    RmqModule.register({ name: 'zainul', age: 20 }),
    CoffeesModule,
  ],
  providers: [CoffeeRantingService],
})
export class CoffeeRantingModule {}
