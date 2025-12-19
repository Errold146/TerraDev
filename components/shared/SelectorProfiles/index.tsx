"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { UserTerraDev } from "@prisma/client"
import { ChevronDown, LogOut, Pencil } from "lucide-react"

import { logout } from "@/actions/logout"
import { useCurrentUser } from "@/hooks/useCurretUser"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

interface Props {
    users: UserTerraDev[]
}

export function SelectorProfiles({ users }: Props) {

    const router = useRouter()
    const {changeCurrentUser, currentUser} = useCurrentUser()

    const onChangeUser = (userTD: UserTerraDev) => {
        changeCurrentUser(userTD)
        router.refresh()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex gap-1 items-center">
                    <Image 
                        src={currentUser ? currentUser.avatarUrl : "/profiles/no-img.png"}
                        alt={currentUser ? currentUser.profileName : "Sin foto de perfil"}
                        width={35}
                        height={35}
                        priority
                    />
                    <ChevronDown />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent">
                {
                    users.map(us => (
                        <DropdownMenuItem
                            key={us.id}
                            onClick={() => onChangeUser(us)}
                            className="flex gap-2 mb-3 group cursor-pointer hover:bg-transparent focus:bg-transparent"
                        >
                            <Image 
                                src={us.avatarUrl}
                                alt={us.profileName}
                                width={30}
                                height={30}
                                priority
                                className="rounded-md"
                            />
                            <p className="group-hover:text-azul-500 group-hover:bg-azul-200 w-full p-2 text-center text-white transition-colors duration-300 rounded-md">{us.profileName}</p>
                        </DropdownMenuItem>
                    ))
                }
                <DropdownMenuItem 
                    className="flex gap-2 mb-3 cursor-pointer text-white hover:bg-transparent focus:bg-transparent"
                    onClick={() => router.push("/profiles")}
                >
                    <Pencil className="w-4 h-4 mx-2 text-pastel-600" />
                    <p className="hover:text-pastel-500 hover:bg-pastel-200 w-full p-2 text-center text-white transition-colors duration-300 rounded-md">Administrar Perfiles</p>
                </DropdownMenuItem>
                <DropdownMenuItem 
                    className="flex gap-2 mb-3 cursor-pointer text-white hover:bg-transparent focus:bg-transparent"
                    onClick={() => logout()}
                >
                    <LogOut className="w-4 h-4 mx-2 text-rojo-600" />
                    <p className="hover:text-rojo-500 hover:bg-rojo-200 w-full p-2 text-center text-white transition-colors duration-300 rounded-md">Cerrar Sesión</p>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
