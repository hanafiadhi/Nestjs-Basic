import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { COFFE_BRANDS } from './coffe.constant';

class ConfigService {}
class DevelopmentService {}
class ProductionService {}

@Module({
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFE_BRANDS,
      useValue: ['kapal api', 'luwak', 'lampung'],
    },
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentService
          : ProductionService,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
