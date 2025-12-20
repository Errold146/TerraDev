"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface Props {
    titleMovie: string
}

export function NavbarFilm({ titleMovie }: Props) {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <nav 
            className="fixed flex gap-2 p-5 cursor-pointer items-center z-10 bg-zinc-900/70"
            onClick={handleBack}
        >
            <ArrowLeft className="w-8 h-8 text-rojo-600" />
            <p className="text-2xl">
                Estás viendo: <span className="font-bold">{titleMovie}</span>
            </p>
        </nav>
    )
}
