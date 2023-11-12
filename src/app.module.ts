import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRantingModule } from './coffee-ranting/coffee-ranting.module';
import { RmqModule } from './rmq/rmq.module';

@Module({
  imports: [CoffeesModule, CoffeeRantingModule, RmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
