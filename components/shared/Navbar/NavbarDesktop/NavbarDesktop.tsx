"use client"

import Link from "next/link"
import { BellRing, Search } from "lucide-react"

import { UserTerraDev } from "@prisma/client"
import { itemsNavbar } from "@/data/itemsNavbar"
import { Logo, SelectorProfiles } from "@/components/shared"

interface Props {
   users: UserTerraDev[] 
}

export const NavbarDesktop = ({users}: Props) => {

    return (
        <div
            className="z-30 left-0 right-0 top-0 h-16 fixed w-full bg-zinc-800 transition-all duration-300"
        >
            <div className="px-[4%] mx-auto h-full">
                <div className="flex gap-4 justify-between h-full items-center">
                    <div className="flex gap-2 items-center">
                        <Logo />
                        <div className="ml-10 flex gap-4">
                            {itemsNavbar.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    className="hover:text-azul-500 transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Search className="cursor-pointer hover:text-pastel-500" />
                        <BellRing className="cursor-pointer hover:text-pastel-500" />

                        <div className="flex gap-2 items-center">
                            <SelectorProfiles users={users} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
