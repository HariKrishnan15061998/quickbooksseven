// // quickbooks.controller.ts

// import { Controller, Get, Req, Res } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { createClient, CreateClientOptions } from 'intuit-oauth';

// @Controller('auth/quickbooks')
// export class PraticeController {
//   private oauthClient: any;

//   constructor() {
//     const options: CreateClientOptions = {
//       clientId: 'YOUR_CLIENT_ID',
//       clientSecret: 'YOUR_CLIENT_SECRET',
//       environment: 'sandbox', // or 'production' for live accounts
//       redirectUri: 'http://localhost:3000/auth/quickbooks/callback',
//     };
//     this.oauthClient = createClient(options);
//   }

//   @Get('login')
//   async login(@Res() res: Response) {
//     this.oauthClient
//       .getRequestToken()
//       .then((requestTokenResponse: any) => {
//         const authUrl = this.oauthClient.authorizeUri({
//           token: requestTokenResponse.oauth_token,
//         });
//         res.redirect(authUrl);
//       })
//       .catch((error: any) => {
//         console.error('Failed to obtain request token:', error);
//         res.redirect('/'); // Redirect to error page
//       });
//   }

//   @Get('callback')
//   async callback(@Req() req: Request, @Res() res: Response) {
//     const { oauth_token, oauth_verifier } = req.query;

//     this.oauthClient
//       .createToken(oauth_token, oauth_verifier)
//       .then((authResponse: any) => {
//         const { access_token, access_token_secret } = authResponse.token;
//         // Use access_token and access_token_secret for API calls
//         console.log('Access Token:', access_token);
//         console.log('Access Token Secret:', access_token_secret);
//         // Store the access tokens securely for future use

//         res.redirect('/'); // Redirect to the desired route
//       })
//       .catch((error: any) => {
//         console.error('Failed to obtain access token:', error);
//         res.redirect('/'); // Redirect to error page
//       });
//   }
// }
