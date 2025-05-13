import { Database } from "../../db/supabase";
import { UserDAO } from "../dao/user.dao";

const dbClient = Database.getInstance().getClient();
const userDao = new UserDAO(dbClient);

export const getUserByAuthIdService = async (authId: string) => {
  const user = await userDao.getUserByAuthId(authId);
  return user;
};
