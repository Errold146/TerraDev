import { Clock3 } from "lucide-react"

import { cn } from "@/lib/utils"

interface Props {
    age: string
    duration: string
}

export function ChaptersInfo({ age, duration }: Props) {

    const colorByAge = (age: string) => {
        switch (age) {
            case "0":
                return "bg-pastel-500 border border-pastel-200";
            case "12":
                return "bg-azul-500 border border-azul-200";
            case "16":
                return "bg-orange-500 border border-orange-200";
            default:
                return "bg-rojo-500 border border-rojo-200";
        }
    }

    return (
        <div className="flex items-center justify-between gap-3 mb-3 w-full">
            <span
                className={cn(
                    "flex items-center justify-center gap-1.5 text-white text-sm sm:text-base font-semibold p-2 rounded-3xl shadow-md",
                    colorByAge(age)
                )}
            >
                +{age}
            </span>

            <span className="flex items-center justify-center gap-2 text-slate-50 text-sm sm:text-base font-medium p-2 rounded-3xl bg-white/5 border border-gray-400 backdrop-blur">
                <Clock3 className="h-4 w-4 sm:h-5 sm:w-5 text-azul-300" />
                <span>{duration}</span>
            </span>

            <p className="border border-gray-400 px-2 text-[0.5rem] text-gray-400 flex items-center rounded-md h-[15px]">
                HD
            </p>
        </div>
    )
}
