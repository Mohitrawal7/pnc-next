
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"


const connectionString = "postgresql://postgres.zgmkdnqiujytxyohvxwb:bBCsVn6yL2OdagIi@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"        
export const connection =   postgres(connectionString) 
export const db  = drizzle(connection)  

