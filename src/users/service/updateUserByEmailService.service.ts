import { Database } from "../../db/supabase";
import { UpdateUser } from "../../types/user.types";
import { UserDAO } from "../dao/user.dao";

const dbClient = Database.getInstance().getClient();
const userDao = new UserDAO(dbClient);

export const updateUserByEmailService = async (
  email: string,
  user: UpdateUser
) => {
  const updatedUser = await userDao.updateUserByEmail(email, user);
  return updatedUser;
};
