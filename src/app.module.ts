import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRantingModule } from './coffee-ranting/coffee-ranting.module';
import { RmqModule } from './rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      //   validationSchema: Joi.object({
      //     APP_ENV: Joi.string()
      //       .valid('development', 'production', 'test', 'provision')
      //       .default('development'),
      //     APP_NAME: Joi.required(),
      //   }),
    }),
    CoffeesModule,
    CoffeeRantingModule,
    RmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
