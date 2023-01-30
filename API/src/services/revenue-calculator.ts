import core from "../core";
import fs from "fs";
const { cache } = core;

const revenueCalculator = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  // Calculator can only be accessed if it has been authenticated
  if (
    cache.getCurrentCache().get("accessToken") &&
    cache.getCurrentCache().get("refreshToken") &&
    cache.getCurrentCache().get("realmId")
  ) {
    res.render("revenue.pug");
  } else {
    res.status(401).send({ message: "Access Denied" });
  }
};
export default revenueCalculator;
