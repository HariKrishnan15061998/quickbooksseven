// quickbooks.service.ts

import { Injectable } from '@nestjs/common';
import * as QuickBooks from 'node-quickbooks';

@Injectable()
export class QuickBooksService {
  private quickbooks: any;

  constructor() {
    this.quickbooks = new QuickBooks(
      'AB8J0iGydjEOIrD7qzrkrA3VUu1l1siejNNqwOlJMpfJorFv2o',
      '0YKmbmvaTLPSclI3k9YEpKtVyDZCSzhBYWCRQUfp',
      'USER_ACCESS_TOKEN',
      'USER_ACCESS_SECRET',
      '4620816365308731710',
      true, // set to true if using the sandbox environment
      true, // enable debugging to see detailed API requests and responses
    );
  }

  async createCustomer(name: string, email: string): Promise<any> {
    const customer = {
      DisplayName: name,
      PrimaryEmailAddr: {
        Address: email,
      },
    };

    return new Promise((resolve, reject) => {
      this.quickbooks.createCustomer(
        this.quickbooks.realmId,
        customer,
        (error: any, customer: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(customer);
          }
        },
      );
    });
  }
  async getConsumerKeyAndSecret() {
    try {
      const axios = require('axios');

      const QUICKBOOKS_API_URL =
        'https://developer.intuit.com/v2/oauth-apis/auth/oauth2login';

      // Your QuickBooks Developer account credentials
      const EMAIL = 'hk1519982023@gmail.com';
      const PASSWORD = 'HariKrishnan@2023';
      // Send a POST request to the QuickBooks Developer API
      const response = await axios.post(QUICKBOOKS_API_URL, {
        email: EMAIL,
        password: PASSWORD,
      });

      // Extract the Consumer Key and Consumer Secret from the response
      const consumerKey = 'AB8J0iGydjEOIrD7qzrkrA3VUu1l1siejNNqwOlJMpfJorFv2o';
      const consumerSecret = '0YKmbmvaTLPSclI3k9YEpKtVyDZCSzhBYWCRQUfp';

      console.log('Consumer Key:', consumerKey);
      console.log('Consumer Secret:', consumerSecret);
    } catch (error) {
      console.error(
        'Error retrieving Consumer Key and Consumer Secret:',
        error.message,
      );
    }
  }
  async getRequestToken() {
    const oauth = require('oauth-1.0a');
    const crypto = require('crypto');
    const axios = require('axios');

    // QuickBooks API credentials
    const consumerKey = 'AB8J0iGydjEOIrD7qzrkrA3VUu1l1siejNNqwOlJMpfJorFv2o';
    const consumerSecret = '0YKmbmvaTLPSclI3k9YEpKtVyDZCSzhBYWCRQUfp';
    const requestUrl = 'https://oauth.intuit.com/oauth/v1/get_request_token';
    const accessUrl = 'https://oauth.intuit.com/oauth/v1/get_access_token';
    const callbackUrl =
      'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl';

    // OAuth 1.0a instance
    const oauthInstance = oauth({
      consumer: {
        key: consumerKey,
        secret: consumerSecret,
      },
      signature_method: 'HMAC-SHA1',
      hash_function: (base_string, key) => {
        return crypto
          .createHmac('sha1', key)
          .update(base_string)
          .digest('base64');
      },
    });
    const requestData = {
      url: requestUrl,
      method: 'POST',
      data: {
        oauth_callback: callbackUrl,
      },
    };

    const requestOptions = {
      method: requestData.method,
      url: requestData.url,
      headers: oauthInstance.toHeader(oauthInstance.authorize(requestData)),
    };

    try {
      const response = await axios(requestOptions);

      // Extract the request token and token secret from the response
      const requestToken = response.data.oauth_token;
      const tokenSecret = response.data.oauth_token_secret;

      console.log('Request Token:', requestToken);
      console.log('Token Secret:', tokenSecret);

      // Step 2: Redirect the user to the authorization URL
      const authorizationUrl = `https://appcenter.intuit.com/connect/oauth2?oauth_token=${requestToken}`;
      console.log('Authorization URL:', authorizationUrl);
    } catch (error) {
      console.error('Error retrieving request token:', error.message);
    }
  }
}
