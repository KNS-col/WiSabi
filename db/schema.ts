import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// Future-ready business directory schema (not implemented yet)
export const business = pgTable("business", {
  id: uuid("id").primaryKey().defaultRandom(),
  businessName: text("business_name").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category"),
  description: text("description"),
  phone: text("phone"),
  email: text("email"),
  address: text("address"),
  city: text("city"),
  region: text("region"),
  logoUrl: text("logo_url"),
  coverImageUrl: text("cover_image_url"),
  website: text("website"),
  status: text("status").notNull().default("ACTIVE"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Business = typeof business.$inferSelect;
