import { Router } from "express";
import bodyParser from "body-parser";
import services from "./services";
const { setQuickBookAuthCode, getAuthTokens, getRevenue, revenueCalculator } =
  services;
const router = Router();

router.get(
  "/connect",
  [
    bodyParser.urlencoded({
      extended: false,
    }),
    bodyParser.json(),
  ],
  setQuickBookAuthCode
);

router.get(
  "/get-token",
  [
    bodyParser.urlencoded({
      extended: false,
    }),
    bodyParser.json(),
  ],
  getAuthTokens
);
router.get(
  "/calculate-revenue",
  [
    bodyParser.urlencoded({
      extended: false,
    }),
    bodyParser.json(),
  ],
  revenueCalculator
);
router.get(
  "/get-revenue",
  [
    bodyParser.urlencoded({
      extended: false,
    }),
    bodyParser.json(),
  ],
  getRevenue
);

export default router;
