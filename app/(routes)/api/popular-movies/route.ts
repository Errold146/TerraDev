import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import type { PopularMovie, Prisma } from "@prisma/client";

export async function POST(req: Request) {

    try {
        const body = await req.json()
        const movies = body?.movies

        if (!movies || !Array.isArray(movies) || movies.length === 0) {
            return new NextResponse("Falta información para subir las películas", { status: 400 })
        }

        const createdMovies: PopularMovie[] = []

        for (const m of movies) {
            const { title, movieVideo, trailerVideo, thumbnailUrl, genre, age, duration, ranking } = m

            if (!title || !movieVideo || !trailerVideo || !thumbnailUrl || !genre || !age || !duration || ranking == null) {
                return new NextResponse("Falta información para completar la operación", { status: 400 })
            }

            const data: Prisma.PopularMovieUncheckedCreateInput = {
                title,
                movieVideo,
                trailerVideo,
                thumbnailUrl,
                genre: Array.isArray(genre) ? genre.join(",") : String(genre),
                age,
                duration,
                ranking: Number(ranking)
            }

            const created = await db.popularMovie.create({ data })
            createdMovies.push(created)
        }

        return NextResponse.json(createdMovies, { status: 201 })
    } catch (error: unknown) {
        console.error(error)
        const message = error instanceof Error ? error.message : String(error)
        if (message.includes('Invalid') || message.includes('Expected')) {
            return new NextResponse(message, { status: 400 })
        }
        return new NextResponse("Error de servidor", { status: 500 })
    }
}