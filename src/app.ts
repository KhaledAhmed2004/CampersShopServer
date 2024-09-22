import express, { Application, Request, Response, application } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFoundRoute";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("CampeTime Server running...");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
