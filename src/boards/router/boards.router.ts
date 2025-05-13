import { Router } from "express";
import { createBoard } from "../controller/createBoard";
import { getAllBoards } from "../controller/getAllBoards";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from boards router!");
});

router.post("/create", createBoard);

router.get("/get-all", getAllBoards)

export default router;
