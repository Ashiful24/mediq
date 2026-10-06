CREATE TYPE "public"."user_types" AS ENUM('SYSTEM_ADMIN', 'PROPERTY_ADMIN', 'USER', 'PROPERTY_STAFF');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "user_type" "user_types" DEFAULT 'USER';