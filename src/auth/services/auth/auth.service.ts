// // quickbooks.controller.ts
// // quickbooks.controller.ts

// // quickbooks.controller.ts

// import { Controller, Get, Req, Res } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { OAuthClient, Scopes } from 'intuit-oauth';

// @Controller('auth/quickbooks')
// export class PraticeController {
//   private oauthClient: any;

//   constructor() {
//     const clientId = 'YOUR_CLIENT_ID';
//     const clientSecret = 'YOUR_CLIENT_SECRET';
//     const redirectUri = 'http://localhost:3000/auth/quickbooks/callback';

//     const oauthClientOptions = {
//       clientId,
//       clientSecret,
//       environment: 'sandbox', // or 'production' for live accounts
//       redirectUri,
//     };

//     this.oauthClient = new OAuthClient(oauthClientOptions);
//   }

//   @Get('login')
//   async login(@Res() res: Response) {
//     const authUri = this.oauthClient.authorizeUri({
//       scope: [Scopes.Accounting],
//     });
//     res.redirect(authUri);
//   }

//   @Get('callback')
//   async callback(@Req() req: Request, @Res() res: Response) {
//     const { code } = req.query;
//     const tokenResponse = await this.oauthClient.createToken(code.toString());
//     const { access_token, refresh_token } = tokenResponse.getToken();

//     // Store the access tokens securely for future use
//     const userAccessToken = access_token;
//     const userAccessSecret = refresh_token;
//     console.log('User Access Token:', userAccessToken);
//     console.log('User Access Secret:', userAccessSecret);

//     res.redirect('/'); // Redirect to the desired route
//   }
// }
