"use client"

import { PopularMovie } from "@prisma/client"
import { ActionsButtonsFilm, ChaptersInfo, FilmGenres } from "@/components/shared"

interface Props {
    movie: PopularMovie
}

// Convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
    if (!url) return ""
    
    // Handle youtu.be format
    const youtubeShortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
    if (youtubeShortMatch) {
        return `https://www.youtube.com/embed/${youtubeShortMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${youtubeShortMatch[1]}&controls=0`
    }
    
    // Handle youtube.com/watch format
    const youtubeLongMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
    if (youtubeLongMatch) {
        return `https://www.youtube.com/embed/${youtubeLongMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${youtubeLongMatch[1]}&controls=0`
    }
    
    return url
}

export function InfoExtaFilm({ movie }: Props) {
    const embedUrl = getYouTubeEmbedUrl(movie.trailerVideo)
    const genres = movie.genre.split(",").map((genre) => genre.trim()).filter(Boolean)
    
    return (
        <div 
            className="hidden group-hover:block absolute top-0 left-0 w-full bg-zinc-900 rounded-lg shadow-2xl z-30 border-2 border-white overflow-hidden"
        >
            <div className="aspect-video">
                <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className="p-4 shadow-lg">
                <ActionsButtonsFilm idFilm={movie.id} />
                <ChaptersInfo age={movie.age} duration={movie.duration} />
                <FilmGenres genres={genres} />
            </div>
        </div>
    )
}
