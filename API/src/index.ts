import express, { Express, Request, Response } from "express";
import router from "./router";

const app: Express = express();
const port = 3000;

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to revenue checker app");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
