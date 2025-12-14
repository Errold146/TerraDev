import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { auth } from "@/auth"
import { Profiles } from "./components/Profiles";

export default async function ProfilesPage() {

    const session = await auth()
    if ( !session?.user ) redirect("/login");

    const userTerraDev = await db.userTerraDev.findMany({ where: { userId: session.user.id }})

    return (
        <div className="h-full flex flex-col justify-center items-center bg-zinc-900">
            <div>
                <h1 className="text-5xl mb-8">¿Quien está mirando? Elige tu perfil</h1>
            </div>

            <Profiles users={userTerraDev} />
        </div>
    )
}
