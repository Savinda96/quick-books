import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "/../../.env") });

const config = {
  redirectUri: "http://localhost:3000/get-token/",
  authorizationUri: "https://appcenter.intuit.com/connect/oauth2",
  accessTokenUri: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
  scopes: ["com.intuit.quickbooks.accounting"],
  state: "CSRF",
  clientId: process.env.CLIENT_ID || "",
  clientSecrete: process.env.CLIENT_SECRET || "",
};

export default config;
