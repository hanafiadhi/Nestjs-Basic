import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { COFFE_BRANDS } from './coffe.constant';

class ConfigService {}
class DevelopmentService {}
class ProductionService {}

@Injectable()
export class CoffeBrandsFactory {
  create() {
    return ['kapal api', 'luwak'];
  }
}

@Module({
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeBrandsFactory,
    {
      provide: COFFE_BRANDS,
      useFactory: async (coffeBrands: CoffeBrandsFactory) => {
        const coffeBrand = await Promise.resolve(coffeBrands.create());
        console.log('haii there from useFactory');
        return coffeBrand;
      },
      inject: [CoffeBrandsFactory],
    },
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
