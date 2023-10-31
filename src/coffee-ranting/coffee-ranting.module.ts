import { Module } from '@nestjs/common';
import { CoffeeRantingService } from './coffee-ranting.service';
import { CoffeesModule } from 'src/coffees/coffees.module';

@Module({
    imports:[CoffeesModule],
  providers: [CoffeeRantingService]
})
export class CoffeeRantingModule {}
