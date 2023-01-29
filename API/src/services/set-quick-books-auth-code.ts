import authHandler from '../core';

const setQuickBookAuthCode = async (req: any, res: any, next: any): Promise<void> => {
  const redirectUri = authHandler.getClient().code.getUri();
  res.redirect(redirectUri)
  return next();
};
export default setQuickBookAuthCode;
