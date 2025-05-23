import { Database } from "../../db/supabase";
import { CreateBoard } from "../../types/boards.types";
import { BoardsDAO } from "../dao/boards.dao";

const dbClient = Database.getInstance().getClient();
const boardsDao = new BoardsDAO(dbClient);

export const createBoardsService = async (board: CreateBoard) => {
  const createdBoard = await boardsDao.createBoard(board);
  return createdBoard;
};
