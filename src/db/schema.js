import { sql } from "drizzle-orm";
//import { serial, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { pgTable,serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const recipes = pgTable("recipes",{
    id   :serial("id").primaryKey(),
    name :varchar("name",{length:50}).notNull().unique(),
    description: text("description").notNull(),
    createdAt : timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
})

