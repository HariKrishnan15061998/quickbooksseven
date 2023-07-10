// auth.controller.ts

import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('quickbooks')
  @UseGuards(AuthGuard('quickbooks'))
  async quickbooksLogin() {}

  @Get('quickbooks/callback')
  @UseGuards(AuthGuard('quickbooks'))
  async quickbooksCallback(@Req() req: Request, @Res() res: Response) {
    // Handle callback logic and redirect to desired route
    res.redirect('/customers');
  }
}
