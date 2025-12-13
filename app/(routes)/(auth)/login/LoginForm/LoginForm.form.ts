import { z } from "zod"

export const formSchema = z.object({
    email: z.string().min(2, {message: "Campo Requerido *"}),
    password: z.string().min(2, {message: "Campo Requerido *"})
})