// app.module.ts

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth/controllers/auth/auth.controller';
import { CustomersController } from './customers/controller/customers/customers.controller';
import { QuickBooksService } from './quickbooksservice/services/quickbooksservice/quickbooksservice.service';
import { QuickBooksStrategy } from './quickbooks.strategy';
// import { PraticeController } from './auth/services/auth/auth.service';

@Module({
  imports: [PassportModule, AuthModule],
  controllers: [AuthController, CustomersController],
  providers: [QuickBooksService, QuickBooksStrategy],
})
export class AppModule {}
