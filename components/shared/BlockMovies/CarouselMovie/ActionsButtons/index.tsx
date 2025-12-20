"use client"

import { Movie } from "@prisma/client"
import { useRouter } from "next/navigation"
import { Play, Heart, HeartOff, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useFavoritesFilms } from "@/hooks/useFavoritesFilms"

interface Props {
    movieId: string
    movie: Movie
    isMyList: boolean
}

export function ActionsButtons({ movieId, movie, isMyList }: Props) {

    const router = useRouter()
    const { favoritesFilmsByUser, addFavoriteFilm, removeFavoriteFilm } = useFavoritesFilms()

    const onPlayButton = () => {
        router.push(`/movie/${movieId}`)
    }

    const addFavorities = () => {
        addFavoriteFilm(movie)
    }

    const removeFavorities = () => {
        removeFavoriteFilm(movieId)
    }

    return (
        <div className="flex justify-between my-3">
            <Button
                size={"icon"}
                variant={"ghost"}
                className="bg-linear-to-br from-rojo-500 to-rojo-600 rounded-full flex items-center justify-center w-10 h-10 border-0 hover:from-rojo-400 hover:to-rojo-500 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                onClick={onPlayButton}
            >
                <Play className="text-white h-4 w-4 fill-rojo-200 group-hover:scale-110 transition-transform" />
            </Button>
             
            <div>
                {
                    isMyList ? (
                        <Button
                            size={"icon"}
                            variant={"ghost"}
                            className="bg-linear-to-br from-azul-500 to-azul-600 rounded-full flex items-center justify-center w-10 h-10 border-0 hover:from-azul-400 hover:to-azul-500 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                            onClick={removeFavorities}
                        >
                            <HeartOff  
                                width={10}
                                height={10}
                                className="text-white fill-azul-200 h-4 w-4 hover:text-azul-100"
                            />   
                        </Button>
                    ) : (
                        <Button
                            size={"icon"}
                            variant={"ghost"}
                            className="bg-linear-to-br from-pastel-500 to-pastel-600 rounded-full flex items-center justify-center w-10 h-10 border-0 hover:from-pastel-400 hover:to-pastel-500 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                            onClick={addFavorities}
                        >
                            <Heart 
                                width={10}
                                height={10}
                                className="text-white fill-pastel-200 h-4 w-4 hover:text-pastel-100"
                            />
                        </Button>
                    )
                }
            </div>

            <Button
                size={"icon"}
                variant={"ghost"}
                className="bg-linear-to-br from-azul-500 to-azul-600 backdrop-blur-sm border-0 rounded-full flex items-center justify-center w-10 h-10 hover:from-azul-400 hover:to-azul-500 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            >
                <ChevronDown 
                    className="text-white h-4 w-4 group-hover:translate-y-0.5 transition-transform"
                />
            </Button>
        </div>
    )
}
