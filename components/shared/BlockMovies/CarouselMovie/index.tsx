import Image from "next/image"
import { Movie } from "@prisma/client"

import { Card, CardContent } from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"


import { ActionsButtons } from "./ActionsButtons"
import { ChaptersInfo, FilmGenres } from "@/components/shared"

interface Props {
    movies: Movie[]
    isMyList: boolean
}

export function CarouselMovie({ movies, isMyList }: Props) {

    return (
        <Carousel className="w-full">
            <CarouselContent className="ml-1 gap-2 [overflow:inherit] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {
                    movies.map(mov => {
                        const genres = mov.genre.split(",").map((genre) => genre.trim()).filter(Boolean)
                        
                        return (
                            <CarouselItem 
                                key={mov.id}
                                className="pl-1 md:basis-1/2 lg:basis-1/5 transition delay-300 group relative hover:bg-transparent"
                            >
                                <Card className="cursor-pointer transition delay-300 group relative">
                                    <CardContent className="flex aspect-video items-center justify-center p-6 relative border-none rounded-md bg-zinc-900">
                                        <Image 
                                            src={`/img-movies/${mov.id}.webp`}
                                            alt={`Imagen de la película: ${mov.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="rounded-md"
                                        />
                                        <div className="opacity-0 absolute top-0 transition-all duration-300 z-10 invisible sm:visible delay-300 bg-zinc-900 rounded-lg scale-0 group-hover:lg:scale-125 group-hover:md:scale-150 group-hover:-translate-y-[5vw] group-hover:opacity-100">
                                            <Image 
                                                src={`/img-movies/${mov.id}.webp`}
                                                alt={`Imagen de la película: ${mov.title}`}
                                                width={200}
                                                height={200}
                                                className="cursor-pointer object-cover transition-all duration-300 shadow-xl w-full rounded-t-lg"
                                            />

                                            <div className="p-2 shadow-lg">
                                                <ActionsButtons movieId={mov.id} movie={mov} isMyList={isMyList} />
                                                <ChaptersInfo age={mov.age} duration={mov.duration} />
                                                <FilmGenres genres={genres} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/80 hover:bg-black border-2 border-white/60 hover:border-white text-white hover:text-white hover:scale-110 transition-all size-12 shadow-lg shadow-black/50" />
            <CarouselNext className="right-2 bg-black/80 hover:bg-black border-2 border-white/60 hover:border-white text-white hover:text-white hover:scale-110 transition-all size-12 shadow-lg shadow-black/50" />
        </Carousel>
    )
}
