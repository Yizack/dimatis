import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const downloads = sqliteTable("downloads", {
  id: integer().primaryKey(),
  file: text().notNull().unique(),
  count: integer().notNull().default(0),
  lastDownload: integer()
});
