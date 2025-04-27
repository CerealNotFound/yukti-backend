import { Database } from "../../db/supabase";
import { BoardsDAO } from "../dao/boards.dao";

const dbClient = Database.getInstance().getClient();
const boardsDao = new BoardsDAO(dbClient);

export const getAllBoardsService = async () => {
  const boards = await boardsDao.getAllBoards();
  return boards;
};
