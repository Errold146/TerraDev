import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { auth } from "@/auth"
import { Profiles } from "./components/Profiles";

export default async function ProfilesPage() {

    const session = await auth()
    if ( !session?.user ) redirect("/login");

    const userTerraDev = await db.userTerraDev.findMany({ where: { userId: session.user.id }})

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-900 px-4 py-8 md:py-0">
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-semibold">¿Quién está mirando?</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">Elige tu perfil</p>
            </div>

            <Profiles users={userTerraDev} />
        </div>
    )
}
