import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/signUp",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(`🚀 ~ credentials:`, { credentials });
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session }) {
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log(`🚀 ~ user, account, profile, email, credentials:`, {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true;
    },
    async session({ session, token }) {
      console.log(`🚀 ~ token:`, token);

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
