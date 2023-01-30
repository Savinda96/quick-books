import core from "../core";
const { authHandler, cache } = core;

// Used to fetch and save the tokens
const getAuthTokens = async (req: any, res: any, next: any): Promise<void> => {
  const tokens = await authHandler.getClient().code.getToken(req.originalUrl);
  // Ideally these should be stored in secret manager. persistant memory against a user
  cache.getCurrentCache().set("accessToken", tokens.accessToken);
  cache.getCurrentCache().set("refreshToken", tokens.refreshToken);
  cache.getCurrentCache().set("realmId", req.query.realmId);
  res.redirect("/calculate-revenue");
};
export default getAuthTokens;
