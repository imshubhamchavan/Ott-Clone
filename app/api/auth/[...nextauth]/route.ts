import { authOption } from "@/app/utils/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOption)

export {handler as GET, handler as POST};