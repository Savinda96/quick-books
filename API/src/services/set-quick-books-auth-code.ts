import core from "../core";
const { authHandler } = core;

const setQuickBookAuthCode = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  const redirectUri = authHandler.getClient().code.getUri();
  res.redirect(redirectUri);
};
export default setQuickBookAuthCode;
