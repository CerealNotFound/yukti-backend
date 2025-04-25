import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { envVariables } from "../utils/envVariables";

const { SUPABASE_URL, SUPABASE_ANON_KEY } = envVariables;

export class Database {
  protected static instanceOfDatabase: Database | null = null;
  protected instanceOfSupabase: SupabaseClient | null = null;

  protected constructor() {
    if (this.instanceOfSupabase === null) {
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        this.instanceOfSupabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("🧙 Connected to Supabase");
      }
    }
  }

  public static getInstance(): Database {
    if (this.instanceOfDatabase === null) {
      this.instanceOfDatabase = new Database();
    }

    return this.instanceOfDatabase;
  }

  public getClient(): SupabaseClient {
    if (this.instanceOfSupabase === null) {
      throw new Error("Supabase client is not initialized");
    }
    return this.instanceOfSupabase;
  }
}
