import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"

import { getUserByEmail } from "./data";
import { singInSchema } from "./lib/zod";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validateFiels = singInSchema.safeParse(credentials)

                if ( !validateFiels.success ) return null;

                if ( validateFiels.success ) {
                    const { email, password } = validateFiels.data
                    const user = await getUserByEmail(email)

                    if ( !user || !user.password ) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if ( passwordMatch ) return user;
                }

                return null
            }
        })
    ]
} satisfies NextAuthConfig
