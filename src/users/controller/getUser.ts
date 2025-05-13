import { Request, Response } from "express";
import { getUserByAuthIdService } from "../service/getUserByAuthId.service";

export const getUserByAuthId = async (req: Request, res: Response) => {
  try {
    const { authId } = req.params;
    const user = await getUserByAuthIdService(authId);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
