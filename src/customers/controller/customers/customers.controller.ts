// customers.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { get } from 'http';
// import { credentials } from 'src/credentials.service';
import { QuickBooksService } from 'src/quickbooksservice/services/quickbooksservice/quickbooksservice.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly quickbooksService: QuickBooksService) {}
  @Get()
  async getCredentials() {
    // const { name, email } = createCustomerDto;
    return this.quickbooksService.getRequestToken();
  }
  @Post()
  async createCustomer() {
    // const { name, email } = createCustomerDto;
    return this.quickbooksService.createCustomer('name', 'email');
  }
}
