import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export async function POST(req: Request) {
    const user = await currentUser()
    const { profileName, avatarUrl } = await req.json()

    if(!user) return new NextResponse("Acceso Denegado", { status: 401 });
    if(!profileName || !avatarUrl || !user.id) return new NextResponse("Datos Inválidos", { status: 400 });

    try {
        const createUser = await db.userTerraDev.create({
            data: {
                profileName,
                avatarUrl,
                userId: user.id
            }
        })

        return NextResponse.json(createUser)
    } catch (error) {
        console.error("Error creating UserTerraDev:", error)
        return new NextResponse("Error interno del servidor", { status: 500 })
    }
}

export async function DELETE(req: Request) {
    const user = await currentUser()
    if ( !user ) return new NextResponse("Acceso Denegado", { status: 401 });
    
    try {
        const { userTerraDev, idProfile } = await req.json()
        const id = userTerraDev ?? idProfile
        if ( !id ) return new NextResponse("Datos inválidos", { status: 400 })

        const existing = await db.userTerraDev.findUnique({ where: { id } })
        if ( !existing ) return new NextResponse("Perfil no encontrado", { status: 404 })
        if ( existing.userId !== user.id ) return new NextResponse("Acceso Denegado", { status: 403 })

        const deleteUser = await db.userTerraDev.delete({ where: { id }})
        return NextResponse.json(deleteUser)
    } catch (error) {
        console.error("Error deleting UserTerraDev:", error)
        return new NextResponse("Error interno del servidor", { status: 500 })
    }
}