import { AuthConfig } from 'angular-oauth2-oidc';

export const DiscoveryDocumentConfig = {
    url: "https://msateknik1.b2clogin.com/msateknik1.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=b2c_1_signupsignin"
}

export const authConfig: AuthConfig = {
    redirectUri: window.location.origin + '/index.html', //'http://localhost:4200/index.html',
    responseType: 'token id_token',
    issuer: 'https://msateknik1.b2clogin.com/eb0217f2-1c9c-4d89-a71b-98808ffd6220/v2.0/',
    strictDiscoveryDocumentValidation: false,
    tokenEndpoint: 'https://msateknik1.b2clogin.com/msateknik1.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_signupsignin',
    loginUrl: 'https://msateknik1.b2clogin.com/msateknik1.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_signupsignin',
    clientId: '3f9a73cc-950e-489b-8c9c-424eabb0f1bb',
    scope: 'openid profile https://msateknik1.onmicrosoft.com/msateknikclient/user_impersonation',
    skipIssuerCheck: true,
    clearHashAfterLogin: true,
    oidc: true,
}