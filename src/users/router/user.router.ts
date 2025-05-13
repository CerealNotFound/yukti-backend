import { Router } from "express";
import { updateUserByEmail } from "../controller/updateUserByEmail";
import { createUser } from "../controller/createUser";
import { getUserByAuthId } from "../controller/getUser";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from user router!");
});

router.post("/create", createUser);
router.post("/update-by-email/:email", updateUserByEmail);
router.get("/get/:authId", getUserByAuthId);

export default router;
