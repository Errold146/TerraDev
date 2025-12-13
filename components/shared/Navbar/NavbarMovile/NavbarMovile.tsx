import Link from "next/link";
import { BellRing, Menu, Search, User } from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet"

import { itemsNavbar } from "@/data";
import { Logo } from '@/components/shared';

export const NavbarMovile = () => {
    return (
        <div className="p-4 flex justify-between">
            <Logo />

            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent side="left" className="bg-black">
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
                        <User className="cursor-pointer hover:text-pastel-500" />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
