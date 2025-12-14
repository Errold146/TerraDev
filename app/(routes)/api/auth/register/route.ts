import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

import { db } from "@/lib/db"
import { getUserByEmail } from "@/data"

export async function POST(req: Request) {
    const { email, password } = await req.json()

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const existingUser = await getUserByEmail(email)

        if (existingUser) {
            return new NextResponse("Email registrado anteriormente", { status: 400 })
        }

        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json(newUser)

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}