import core from "../core";
const { cache } = core;

const getRevenue = async (req: any, res: any, next: any): Promise<void> => {
  console.log(cache.getCurrentCache().get("accessToken"));
  
};
export default getRevenue;