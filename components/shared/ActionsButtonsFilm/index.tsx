"use client"

import { ChevronDown, Play } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

interface Props {
    idFilm: string
}

export function ActionsButtonsFilm({ idFilm }: Props) {

    const router = useRouter()

    const onPlayButton = () => {
        router.push(`/movie/${idFilm}`)
    }

    return (
        <div className="flex justify-between items-center mb-5">
            <Button
                size={"icon"}
                variant={"ghost"}
                className="bg-linear-to-br from-rojo-500 to-rojo-600 rounded-full flex items-center justify-center w-12 h-12 border-0 hover:from-rojo-400 hover:to-rojo-500 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                onClick={onPlayButton}
            >
                <Play className="text-white h-5 w-5 fill-white group-hover:scale-110 transition-transform" />
            </Button>
            
            <Button
                size={"icon"}
                variant={"ghost"}
                className="bg-linear-to-br from-azul-500 to-azul-600 backdrop-blur-sm border-0 rounded-full flex items-center justify-center w-12 h-12 hover:from-azul-400 hover:to-azul-500 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            >
                <ChevronDown 
                    className="text-white h-5 w-5 group-hover:translate-y-0.5 transition-transform"
                />
            </Button>
        </div>
    )
}
