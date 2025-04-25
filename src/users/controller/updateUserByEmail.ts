import { Request, Response } from "express";
import { updateUserByEmailService } from "../service/updateUserByEmailService.service";

export const updateUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await updateUserByEmailService(email, req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
