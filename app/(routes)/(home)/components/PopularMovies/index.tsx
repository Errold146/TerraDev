import Image from "next/image"

import { PopularMovie } from "@prisma/client"
import { InfoExtaFilm } from "./InfoExtraFilm"

interface Props {
    movies: PopularMovie[]
}

export function PopularMovies({ movies }: Props) {
    return (
        <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%] z-10">
            <h3 className="text-2xl font-semibold mb-3">Series populares actualmente</h3>

            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
                    {
                        movies.map(mov => (
                            <div 
                                key={mov.id}
                                className="cursor-pointer group relative"
                            >
                                <div className="flex transition-opacity duration-300 group-hover:opacity-90 w-full justify-center">
                                    <Image 
                                        src={`/ranking/${mov.ranking}.png`}
                                        alt="Number of ranking"
                                        width={116}
                                        height={150}
                                        className="h-auto w-auto lg:max-h-full"
                                    />
                                    <Image 
                                        src={mov.thumbnailUrl}
                                        alt="Image of ranking"
                                        width={116}
                                        height={150}
                                        className="h-auto w-auto md:max-h-[180px] lg:max-h-full"
                                    />
                                </div>
                                <InfoExtaFilm movie={mov} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
