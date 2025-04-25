import { Request, Response } from "express";
import { getAllBoardsService } from "../service/getAllBoards.service";

export const getAllBoards = async (req: Request, res: Response) => {
  try {
    const boards = await getAllBoardsService();
    res.status(200).json(boards);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
