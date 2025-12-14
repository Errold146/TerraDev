import { z } from "zod";

export const singInSchema = z.object({
    email: z.email("Email Inválido").min(2, "Email Requerido"),
    password: z.string().min(2, "Password requerido o muy corto")
})