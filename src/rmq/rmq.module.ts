import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class RmqModule {
  static register(option: { name: string; age: number }): DynamicModule {
    return {
      module: RmqModule,
      providers: [
        {
          provide: option.name,
          useValue: option,
        },
      ],
      exports: [
        {
          provide: option.name,
          useValue: option,
        },
      ],
    };
  }
}
