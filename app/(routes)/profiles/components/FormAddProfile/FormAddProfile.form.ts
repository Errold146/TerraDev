import { z } from "zod"

export const formSchema = z.object({
    profileName: z.string().min(2, "Campo Requerido").max(50),
    avatarUrl: z.enum([
        "/profiles/profile-1.png",
        "/profiles/profile-2.png",
        "/profiles/profile-3.png",
        "/profiles/profile-4.png",
    ], "Debes seleccionar un avatar" )

})