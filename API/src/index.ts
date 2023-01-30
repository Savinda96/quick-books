import express, { Express, Request, Response } from "express";
import path from "path";
import router from "./router";

const app: Express = express();
const port = 3000;

app.use(router);

app.set("views", path.join(__dirname, "../views")); // specify the views directory
app.set("view engine", "pug"); // register the template engine

app.get("/", (req: Request, res: Response) => {
  res.render("index.pug");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
