"use client"

import axios from "axios"
import Image from "next/image"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter,
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { AddProfile } from "./AddProfile"
import { UserTerraDev } from "@prisma/client"
import { useCurrentUser } from "@/hooks/useCurretUser"

interface Props {
    users: UserTerraDev[]
}

export function Profiles({ users }: Props) {

    const [manageProfile, setManageProfile] = useState(false)
    const [usersList, setUsersList] = useState<UserTerraDev[]>(users)
    const router = useRouter()

    const { changeCurrentUser } = useCurrentUser()

    useEffect(() => {
        setUsersList(users)
    }, [users])

    const onClickUser = (user: UserTerraDev) => {
        changeCurrentUser(user)
        router.push("/")
    }

    const deleteUser = async (idProfile: string) => {
        try {
            await axios.delete("/api/userTerraDev", { data: { userTerraDev: idProfile }})
            setUsersList((prev) => prev.filter((u) => u.id !== idProfile))
            toast.success("Perfil eliminado correctamente")
            
        } catch (error) {
            console.log(error)
            toast.error("Ocurrio un error, recargue e intente de nuevo")
        }
    }

    return (
        <div className="w-full max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-7">
                {
                    usersList.map(user => (
                        <div 
                            key={user.id}
                            className="text-center relative cursor-pointer group"
                            onClick={() => onClickUser(user)}
                        >
                            <div className="w-full aspect-square max-w-[140px] mx-auto">
                                <Image 
                                    src={user.avatarUrl || ""}
                                    alt={`Imagen de ${user.profileName}`}
                                    width={140}
                                    height={140}
                                    priority
                                    className={cn(manageProfile ? "blur-md" : "",
                                        "w-full h-full object-cover border-2 border-transparent hover:border-white rounded-md transition-all duration-300"
                                    )}
                                />
                            </div>

                            <p className="mt-2 text-azul-200 uppercase text-xs sm:text-sm md:text-base lg:text-lg font-medium truncate">{user.profileName}</p>

                            <div 
                                className={cn(
                                    "top-1/2 -translate-y-1/2 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                                    manageProfile ? "absolute" : "hidden"
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <div 
                                            aria-controls={`alert-delete-${user.id}`} 
                                            className="bg-rojo-50 rounded-full hover:bg-rojo-200 p-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Trash2 className="w-6 h-6 text-rojo-600" />
                                        </div>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent id={`alert-delete-${user.id}`} className="bg-zinc-900">
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-azul-200">¿Seguro que quieres elimiar este perfil?</AlertDialogTitle>
                                            <AlertDialogDescription className="text-azul-100">
                                                Un perfil eliminado no se podrá recuperar. Sus favoritos, series y/o películas que haya comenzado a ver, también serán eliminados.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel
                                                className="bg-pastel-100 text-pastel-600 hover:bg-pastel-600 hover:text-pastel-100 border-none transition-colors duration-300"
                                            >Cancelar</AlertDialogCancel>
                                            <AlertDialogAction
                                                className="bg-rojo-100 text-rojo-600 hover:bg-rojo-600 hover:text-rojo-100 border-none transition-colors duration-300"
                                                onClick={() => deleteUser(user.id)}
                                            >Eliminar</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    ))
                }
                <AddProfile />
            </div>

            <div className="mt-8 md:mt-12 lg:mt-16 flex items-center justify-center">
                <Button
                    variant="outline"
                    size="lg"
                    className={cn(
                    "transition-colors duration-300 border-none text-sm sm:text-base md:text-lg px-6 py-3 md:px-8 md:py-4",
                    manageProfile
                        ? "text-azul-500 bg-azul-100 hover:text-azul-100 hover:bg-azul-500"
                        : "text-rojo-500 bg-rojo-100 hover:text-rojo-100 hover:bg-rojo-500"
                    )}
                    onClick={() => setManageProfile(!manageProfile)}
                >
                    {manageProfile ? "Volver" : "Eliminar Perfil"}
                </Button>
            </div>
        </div>
    )
}
