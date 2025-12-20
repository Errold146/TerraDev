"use client"

import { Movie } from "@prisma/client"
import { BlockMovies } from "@/components/shared"
import { useCurrentUser } from "@/hooks/useCurretUser"
import { useFavoritesFilms } from "@/hooks/useFavoritesFilms"

interface Props {
    movies: Movie[]
}

export function ListMovies({ movies }: Props) {

    const { favoritesFilmsByUser } = useFavoritesFilms()
    const { currentUser } = useCurrentUser()
    
    const userTerraDev = currentUser?.id
    const favoriteFilm = userTerraDev ? favoritesFilmsByUser[userTerraDev] : []

    return (
        <div>
            <BlockMovies title="Películas Favoritas" movie={favoriteFilm} isMyList={true} />
            <BlockMovies title="Películas Recientes" movie={movies} isMyList={false} />
        </div>
    )
}
