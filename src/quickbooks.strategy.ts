// quickbooks.strategy.ts

import { Strategy, StrategyOptions } from 'passport-oauth2';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuickBooksStrategy extends PassportStrategy(
  Strategy,
  'quickbooks',
) {
  constructor() {
    const options: StrategyOptions = {
      authorizationURL: 'https://appcenter.intuit.com/connect/oauth2',
      tokenURL: 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/quickbooks/callback', // Update with your redirect URL
    };
    super(options);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    return { accessToken, refreshToken, profile };
  }
}
