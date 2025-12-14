"use server"

import { z } from "zod"
import { AuthError } from "next-auth"

import { signIn } from "@/auth"
import { singInSchema } from "@/lib/zod"

export const login = async (values: z.infer<typeof singInSchema>) => {
    const validatesFields = singInSchema.safeParse(values)

    if ( ! validatesFields.success ) return { error: "Campos inválidos" };

    const { email, password } = validatesFields.data

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/profiles"
        })

        return { success: true }

    } catch (error) {
        if ( error instanceof AuthError ) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Credenciales incorrectas" };
            
                default:
                    return { error: "Algo salio mal, recargue e intente de nuevo" };
            }
        }
    }
}