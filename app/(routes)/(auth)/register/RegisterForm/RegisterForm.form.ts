import { z } from "zod"

export const formSchema = z.object({
    email: z.string().min(2, { message: "Campo Requerido *"}),
    password: z.string().min(2, { message: "Campo Requerido *"}),
    repeatPassword: z.string().min(2, {message: "Campo Requerido *"}),
}).refine(data => data.password === data.repeatPassword, {
    message: "Los password no son iguales *",
    path: ['repeatPassword']
})