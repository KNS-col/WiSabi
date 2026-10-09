CREATE TYPE "public"."staff_status" AS ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED');--> statement-breakpoint
CREATE TABLE "business" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"business_name" text NOT NULL,
	"slug" text NOT NULL,
	"category" text,
	"description" text,
	"phone" text,
	"email" text,
	"address" text,
	"city" text,
	"region" text,
	"logo_url" text,
	"cover_image_url" text,
	"website" text,
	"status" text DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "business_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "staff" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"staff_id" text NOT NULL,
	"public_verification_token" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"position" text NOT NULL,
	"department" text NOT NULL,
	"photo_url" text,
	"status" "staff_status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "staff_staff_id_unique" UNIQUE("staff_id"),
	CONSTRAINT "staff_public_verification_token_unique" UNIQUE("public_verification_token")
);
