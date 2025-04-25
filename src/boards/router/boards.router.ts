import { Router } from "express";
import { createBoards } from "../controller/createBoards";
import { getAllBoards } from "../controller/getAllBoards";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from boards router!");
});

router.post("/create", createBoards);

router.get("/get-all", getAllBoards)

export default router;
