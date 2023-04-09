import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../prisma/client";
import { type NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt"
import { type User } from "@prisma/client";
import { type NextApiHandler } from "next";

type CredentialsUser = User & { password: string };

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "hello@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = (await prisma.user.findUnique({
          where: { email: credentials.email },
        })) as CredentialsUser;

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          return null;
        } 
        
        return user;
      }
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        id: token.id,
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
           id: user.id,
        };
      }
      return token;
    },
  }
};

const handler = NextAuth(authOptions) as NextApiHandler;
export { handler as GET, handler as POST };
