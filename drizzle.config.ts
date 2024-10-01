import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/db/schema/*.ts",
  out: "./src/migrations",
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!,
  },
});
