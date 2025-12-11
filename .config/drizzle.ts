import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./server/db/schema.ts",
  out: "./server/db/migrations",
  breakpoints: true,
  casing: "snake_case"
});
