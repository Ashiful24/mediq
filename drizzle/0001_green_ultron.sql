ALTER TABLE "users" ADD COLUMN "firstname" varchar(30);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lastname" varchar(30);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone" varchar(15) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "gender" varchar(10);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "date_of_birth" varchar(10);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_by" varchar(30);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_by" varchar(30);--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "name";