import AuthenticationHandler from "./authentication-handler";


const authHandler = new AuthenticationHandler({
    clientId: "AB7mhTlDTPjvioBxDYAs5kRwnbcQQfsXDg4O1DVUvxhvhpbOdJ",
    clientSecret: "Ct6zlr2LHLQ1l9kTyQFFMnR0B9sIFOosHJAU6KoG",
    redirectUri: "https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl",
    authorizationUri: "http://localhost:3000/get-token", 
    accessTokenUri: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
  });

export default authHandler;