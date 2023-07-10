// Step 1: Get the request token and token secret
export class RequestService {
  //   async getRequestToken() {
  //     const oauth = require('oauth-1.0a');
  //     const crypto = require('crypto');
  //     const axios = require('axios');
  //     // QuickBooks API credentials
  //     const consumerKey = 'YOUR_CONSUMER_KEY';
  //     const consumerSecret = 'YOUR_CONSUMER_SECRET';
  //     const requestUrl = 'https://oauth.intuit.com/oauth/v1/get_request_token';
  //     const accessUrl = 'https://oauth.intuit.com/oauth/v1/get_access_token';
  //     const callbackUrl = 'YOUR_CALLBACK_URL';
  //     // OAuth 1.0a instance
  //     const oauthInstance = oauth({
  //       consumer: {
  //         key: consumerKey,
  //         secret: consumerSecret,
  //       },
  //       signature_method: 'HMAC-SHA1',
  //       hash_function: (base_string, key) => {
  //         return crypto
  //           .createHmac('sha1', key)
  //           .update(base_string)
  //           .digest('base64');
  //       },
  //     });
  //     const requestData = {
  //       url: requestUrl,
  //       method: 'POST',
  //       data: {
  //         oauth_callback: callbackUrl,
  //       },
  //     };
  //     const requestOptions = {
  //       method: requestData.method,
  //       url: requestData.url,
  //       headers: oauthInstance.toHeader(oauthInstance.authorize(requestData)),
  //     };
  //     try {
  //       const response = await axios(requestOptions);
  //       // Extract the request token and token secret from the response
  //       const requestToken = response.data.oauth_token;
  //       const tokenSecret = response.data.oauth_token_secret;
  //       console.log('Request Token:', requestToken);
  //       console.log('Token Secret:', tokenSecret);
  //       // Step 2: Redirect the user to the authorization URL
  //       const authorizationUrl = `https://appcenter.intuit.com/connect/oauth2?oauth_token=${requestToken}`;
  //       console.log('Authorization URL:', authorizationUrl);
  //     } catch (error) {
  //       console.error('Error retrieving request token:', error.message);
  //     }
  //   }
  // Call the function to get the request token and start the authentication flow
}
