import dotenv from "dotenv";

dotenv.config();

interface EnvVariables {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
}

export const envVariables: EnvVariables = {
    SUPABASE_URL: process.env.SUPABASE_URL as string,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY as string,
}
