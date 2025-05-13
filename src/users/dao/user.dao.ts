import { SupabaseClient } from "@supabase/supabase-js";
import { CreateUser, UpdateUser } from "../../types/user.types";

interface DaoType {
  getAllUsers: () => Promise<any>;
  getUserById: (id: string) => Promise<any>;
  getUserByAuthId: (authId: string) => Promise<any>;
  createUser: (user: CreateUser) => Promise<any>;
  updateUser: (id: string, user: UpdateUser) => Promise<any>;
  updateUserByEmail: (email: string, user: UpdateUser) => Promise<any>;
}

export class UserDAO implements DaoType {
  private client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this.client = client;
  }

  protected throwError = (error: any) => {
    console.error("[DAO] Error occurred:", error);
    if (typeof error === "string") throw new Error(error);
    else throw new Error(JSON.stringify(error));
  };

  protected logMethodCall = (methodName: string, params: any = {}) => {
    console.log(`[DAO] Method called: ${methodName}`, params);
  };

  protected logMethodResult = (methodName: string, result: any) => {
    console.log(`[DAO] Method result: ${methodName}`, result);
  };

  async getAllUsers() {
    this.logMethodCall("getAllUsers");
    try {
      const { data, error } = await this.client
        .from("users")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("getAllUsers", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async getUserById(id: string) {
    this.logMethodCall("getUserById", { id });
    try {
      const { data, error } = await this.client
        .from("users")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("getUserById", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async getUserByAuthId(authId: string) {
    this.logMethodCall("getUserByAuthId", { authId });
    try {
      const { data, error } = await this.client
        .from("users")
        .select("*")
        .eq("auth_id", authId)
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("getUserByAuthId", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async createUser(user: CreateUser) {
    this.logMethodCall("createUser", { user });
    try {
      const { data, error } = await this.client
        .from("users")
        .insert([user])
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("createUser", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async updateUser(id: string, user: UpdateUser) {
    this.logMethodCall("updateUser", { id, user });
    try {
      const { data, error } = await this.client
        .from("users")
        .update(user)
        .eq("id", id)
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("updateUser", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async updateUserByEmail(email: string, user: UpdateUser) {
    this.logMethodCall("updateUserByEmail", { email, user });
    try {
      const { data, error } = await this.client
        .from("users")
        .update(user)
        .eq("email", email)
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("updateUserByEmail", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }
}
