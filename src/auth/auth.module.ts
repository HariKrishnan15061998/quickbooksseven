// auth.module.ts

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { QuickBooksStrategy } from 'src/quickbooks.strategy';

@Module({
  imports: [PassportModule],
  providers: [QuickBooksStrategy],
})
export class AuthModule {}
