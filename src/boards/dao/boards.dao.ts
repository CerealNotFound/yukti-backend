import { SupabaseClient } from "@supabase/supabase-js";
import {
  BoardWithAuthor,
  CreateBoard,
  UpdateBoard,
} from "../../types/boards.types";

interface DaoType {}

export class BoardsDAO implements DaoType {
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

  async getAllBoards(): Promise<BoardWithAuthor[]> {
    this.logMethodCall("getAllBoards");
    try {
      const { data, error } = await this.client
        .from("boards")
        .select(
          "id, title, description, created_at, last_activity, who_can_see, labels, is_starred, status, category, users(name, email)"
        )
        .order("created_at", { ascending: false });

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("getAllBoards", data);
      if (!data) {
        this.throwError("No data found");
      }

      return data || [];
    } catch (error) {
      this.throwError(error);
      return []; // This line will never execute but satisfies TypeScript
    }
  }

  async getBoardById(id: string) {
    this.logMethodCall("getBoardById", { id });
    try {
      const { data, error } = await this.client
        .from("boards")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("getBoardById", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async createBoards(board: CreateBoard[]) {
    this.logMethodCall("createBoard", { board });
    try {
      const { data, error } = await this.client
        .from("boards")
        .insert(board)
        .select("*");

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("createBoard", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }

  async updateBoard(id: string, board: UpdateBoard) {
    this.logMethodCall("updateBoard", { id, board });
    try {
      const { data, error } = await this.client
        .from("boards")
        .update(board)
        .eq("id", id)
        .select("*")
        .single();

      if (error) {
        this.throwError(error);
      }

      this.logMethodResult("updateBoard", data);
      return data;
    } catch (error) {
      this.throwError(error);
    }
  }
}
