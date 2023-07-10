import { Module } from '@nestjs/common';
import { CustomersController } from './controller/customers/customers.controller';

@Module({
  controllers: [CustomersController]
})
export class CustomersModule {}
