/*
 Before using authentication template application, you must register an application with a provider.
 If you have not already done so, a new application can be created at Facebook/google/twitter/linkedin Developers.
 Your application will be issued an app ID and app secret, which need to be provided to the strategy.
 You will also need to configure a redirect URI which matches the route in your application.

*   - `clientID|consumerKey`          - your Provider(facebook/google/twitter/linkedin) application's App ID
*   - `clientSecret|consumerSecret`   - your Provider(facebook/google/twitter/linkedin) application's App Secret
*   - `callbackURL`                   - URL to which Provider(facebook/google/twitter/linkedin) will redirect the user after granting authorization
*/

var ids = {
    facebook: {
        clientID: '409052969272566',
        clientSecret: '21b89c1bd2d9ba8e1e364bb518ef6b1d',
        callbackURL: 'http://authentication-master.azurewebsites.net/auth/facebook/callback'
    },
    google: {
        clientID: 'YOUR_GOOGLE_CLIENTID',
        clientSecret: 'YOUR_GOOGLE_CLIENTSECRET',
        callbackURL: 'YOUR_DOMAIN/auth/google/callback'
    },
    twitter: {
        consumerKey: 'YOUR_TWITTER_CONSUMERKEY',
        consumerSecret: 'YOUR_TWITTER_CONSUMERSECRET',
        callbackURL: "YOUR_DOMAIN/auth/twitter/callback"
    },
    linkedin: {
        clientID: 'YOUR_LINKEDIN_CLIENTID',
        clientSecret: 'YOUR_LINKEDIN_CLIENTSECRET',
        callbackURL: "YOUR_DOMAIN/auth/linkedin/callback"
    }
};

module.exports = ids;
