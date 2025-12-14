import NextAuth from "next-auth"

// Edge-safe middleware: avoid importing the full server `auth` (which instantiates Prisma)
export const { auth: middleware } = NextAuth({ providers: [] })