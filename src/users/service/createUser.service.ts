import { Database } from "../../db/supabase";
import { CreateUser } from "../../types/user.types";
import { UserDAO } from "../dao/user.dao";

const dbClient = Database.getInstance().getClient();
const userDao = new UserDAO(dbClient);


export const createUserService = async (user: CreateUser) => {
    const createdUser  = await userDao.createUser(user);
    return createdUser;
}
