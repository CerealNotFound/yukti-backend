import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import userRouter from "./src/users/router/user.router";
import boardRouter from "./src/boards/router/boards.router";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json());

app.use("/users", userRouter);
app.use("/boards", boardRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
