const setQuickBookConnection = async (req: any, res: any, next: any): Promise<void> => {
  res.send('connected to the app');
  return next();
};
export default setQuickBookConnection;
