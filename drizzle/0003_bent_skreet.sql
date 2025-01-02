ALTER TABLE "recipes" ADD COLUMN "subname" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP;