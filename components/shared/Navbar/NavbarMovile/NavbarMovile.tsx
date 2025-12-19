import Link from "next/link";
import { BellRing, Menu, Search } from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet"

import { UserTerraDev } from "@prisma/client";
import { itemsNavbar } from "@/data/itemsNavbar";
import { Logo, SelectorProfiles } from '@/components/shared';

interface Props {
    users: UserTerraDev[]
}

export const NavbarMovile = ({ users }: Props) => {
    return (
        <div className="p-4 flex justify-between">
            <Logo />

            <Sheet>
                <SheetTrigger aria-controls="nav-sheet">
                    <Menu />
                </SheetTrigger>
                <SheetContent id="nav-sheet" side="left" className="bg-black">
                    <SheetTitle className="text-black">Rutas</SheetTitle>
                    <SheetDescription className="flex flex-col gap-4 ml-10 text-white">
                        {itemsNavbar.map(item => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="hover:text-azul-300 transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </SheetDescription>
                    <div className="border border-white/70 my-5 mx-10"/>
                    <div className="flex justify-between gap-6 mt-4 mx-10">
                        <Search className="cursor-pointer hover:text-pastel-500" />
                        <BellRing className="cursor-pointer hover:text-pastel-500" />
                        
                        <SelectorProfiles users={users} />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
