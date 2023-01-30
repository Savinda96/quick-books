import { Router } from "express";
import bodyParser from "body-parser";
import services from "./services";
const { setQuickBookAuthCode, getAuthTokens, getRevenue, revenueCalculator } =
  services;
const router = Router();

router.get(
  "/connect",
  [
    bodyParser.json(),
  ],
  setQuickBookAuthCode
);

router.get(
  "/get-token",
  [
    bodyParser.json(),
  ],
  getAuthTokens
);
router.get(
  "/calculate-revenue",
  [
    bodyParser.json(),
  ],
  revenueCalculator
);
router.get(
  "/get-revenue",
  [
    bodyParser.json(),
  ],
  getRevenue
);

export default router;
