import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const downloads = sqliteTable("downloads", {
  id: integer("id").primaryKey(),
  file: text("file").notNull().unique(),
  count: integer("count").notNull().default(0),
  lastDownload: integer("last_download")
});
