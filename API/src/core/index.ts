import AuthenticationHandler from "./authentication-handler";
import NodeLocalCache from "./node-cache";
import config from "../config/config";

// TODO : Set CSRF set up for state value
const authHandler = new AuthenticationHandler({
  clientId: config.clientId,
  clientSecret: config.clientSecrete,
  redirectUri: config.redirectUri,
  authorizationUri: config.authorizationUri,
  accessTokenUri: config.accessTokenUri,
  scopes: config.scopes,
  state: config.state,
});

const cache = new NodeLocalCache();

const exportedValue = { authHandler, cache };

export default exportedValue;
