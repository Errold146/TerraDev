"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"

import { FormAddProfile } from "../../FormAddProfile"

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"

export function AddProfile() {

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    aria-controls="add-profile-dialog"
                    className="group flex flex-col items-center justify-center w-full aspect-square max-w-[140px] mx-auto rounded-lg border border-azul-400 
                    bg-azul-100 shadow-sm hover:bg-azul-200 hover:shadow-md transition-all duration-300 ease-in-out"
                >
                    <PlusCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-azul-500 group-hover:text-azul-600 transition-colors duration-300" />
                    <span className="mt-2 md:mt-3 text-azul-600 font-semibold uppercase tracking-wide text-xs sm:text-sm md:text-base px-2">
                        Nuevo Perfil
                    </span>
                </button>
            </DialogTrigger>
            <DialogContent id="add-profile-dialog" className="sm:max-w-[425px] bg-black">
                <DialogHeader>
                    <DialogTitle>Crear un nuevo perfil</DialogTitle>
                    <DialogDescription>
                        Crea los diferentes perfiles que necesites en tu cuenta de TerraDev.
                    </DialogDescription>
                </DialogHeader>
                <FormAddProfile setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}
