

import {defineConfig} from "drizzle-kit";

//migration files
export default defineConfig({
    schema :"./src/db/schema.js",
    out : "./drizzle",
    dialect : "postgresql",
    dbCredentials : {
        url :"postgresql://postgres.zgmkdnqiujytxyohvxwb:bBCsVn6yL2OdagIi@aws-0-ap-south-1.pooler.supabase.com:6543/postgres" 
    }
})

