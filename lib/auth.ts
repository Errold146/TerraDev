import { auth } from "@/auth";
import { db } from "./db";

export const currentUser = async () => {
    const session = await auth();
    const user = session?.user;
    if (!user) return null;

    // Ensure the user exists in the database and return the DB record
    try {
        if (user.id) {
            const dbUser = await db.user.findUnique({ where: { id: user.id } });
            if (dbUser) return dbUser;
        }

        if (user.email) {
            const dbUser = await db.user.findUnique({ where: { email: user.email } });
            if (dbUser) return dbUser;
        }

        return null;
    } catch (error) {
        console.error("currentUser error", error);
        return null;
    }
};