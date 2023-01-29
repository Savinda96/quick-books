import core from "../core";
import fs from "fs";
const { authHandler, cache } = core;

const getAuthTokens = async (req: any, res: any, next: any): Promise<void> => {
  const tokens = await authHandler.getClient().code.getToken(req.originalUrl);
  // Ideally these should be stored in secret manager. persistant memory against a user
  cache.getCurrentCache().set("accessToken",tokens.accessToken);
  cache.getCurrentCache().set("refreshToken",tokens.refreshToken);
};
export default getAuthTokens;
