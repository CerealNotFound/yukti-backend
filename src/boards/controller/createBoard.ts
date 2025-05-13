import { Request, Response } from "express";
import { createBoardsService } from "../service/createBoards.service";

export const createBoard = async (req: Request, res: Response) => {
  try {
    const boards = await createBoardsService(req.body);
    res.status(201).json(boards);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
