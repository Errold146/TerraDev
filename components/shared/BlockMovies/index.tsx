import { Movie } from "@prisma/client"
import { CarouselMovie } from "./CarouselMovie"

interface Props {
    title: string
    movie: Movie[]
    isMyList: boolean
}

export function BlockMovies({title, movie, isMyList}: Props) {
    return (
        <div className="-top-16 relative px-[4%] md:py-20 bg-[#171717]">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>

            <CarouselMovie movies={movie} isMyList={isMyList} />
        </div>
    )
}
