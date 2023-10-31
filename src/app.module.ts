import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRantingModule } from './coffee-ranting/coffee-ranting.module';

@Module({
  imports: [CoffeesModule, CoffeeRantingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
