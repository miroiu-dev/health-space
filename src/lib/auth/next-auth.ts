import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/drizzle";
import { credentials } from "./credentials";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [credentials],
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  debug: true,
});
