import { BlockMovies } from "@/components/shared"
import { Movie } from "@prisma/client"

interface Props {
    movies: Movie[]
}

export function ListMovies({ movies }: Props) {
    return (
        <div>
            <BlockMovies title="Películas Recientes" movie={movies} isMyList={false} />
        </div>
    )
}
