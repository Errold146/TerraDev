import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link
            href="/"
            className="font-extrabold text-2xl text-rojo-600 flex gap-1 hover:bg-zinc-800 p-2 rounded-md"
        >
            <Image
                src="/logo.png"
                alt="Logo Terra Dev"
                width={28}
                height={28}
                className="h-auto"
                priority
            />
            TerraDev
        </Link>
    )
}
