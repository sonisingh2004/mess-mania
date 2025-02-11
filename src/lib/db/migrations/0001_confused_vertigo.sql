ALTER TABLE "posts" DROP CONSTRAINT "posts_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "id";