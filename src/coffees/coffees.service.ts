import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { Coffee } from './entities/coffees.entitiy';
import { COFFE_BRANDS } from './coffe.constant';

@Injectable({ scope: Scope.REQUEST })
export class CoffeesService {
  constructor(@Inject(COFFE_BRANDS) coffeBrands: string[]) {
    console.log('CoffeService Instatiated');
  }
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'kapal api',
      brand: 'kapal lambung',
      flavours: ['choclate', 'vanila'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffees = this.coffees.find((item) => item.id === +id);
    if (!coffees) {
      //   throw new HttpException(`coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`coffee #${id} not found`);
    }
    return coffees;
  }

  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeDto: any) {
    const existCoffe: any = this.findOne(id);

    if (existCoffe) {
      return {
        id,
        ...updateCoffeDto,
      };
    }
  }

  remove(id: string) {
    const coffeIndex = this.coffees.findIndex((item) => item.id === +id);

    if (coffeIndex >= 0) {
      this.coffees.splice(coffeIndex, 1);
    }
  }
}
