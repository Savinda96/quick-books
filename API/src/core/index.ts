import AuthenticationHandler from "./authentication-handler";
import NodeLocalCache from "./node-cache";

// TODO : Set CSRF set up for state value
const authHandler = new AuthenticationHandler({
  clientId: "AB7mhTlDTPjvioBxDYAs5kRwnbcQQfsXDg4O1DVUvxhvhpbOdJ",
  clientSecret: "Ct6zlr2LHLQ1l9kTyQFFMnR0B9sIFOosHJAU6KoG",
  redirectUri: "http://localhost:3000/get-token/",
  authorizationUri: "https://appcenter.intuit.com/connect/oauth2",
  accessTokenUri: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
  scopes: ["com.intuit.quickbooks.accounting"],
  state: "CSRF",
});

const cache = new NodeLocalCache();

const exportedValue = { authHandler, cache };

export default exportedValue;
