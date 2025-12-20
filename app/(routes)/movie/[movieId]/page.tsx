import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { NavbarFilm } from "./components/NavbarFilm";
import { MovieVideo } from "./components/MovieVideo";

export default async function MovieIdPage({params}: {params: Promise<{movieId: string}>}) {

    const { movieId } = await params;

    const movieFilm = await db.movie.findUnique({ where: { id: movieId }})
    const popularFilm = await db.popularMovie.findUnique({ where: { id: movieId }})

    if ( !movieFilm && !popularFilm ) return redirect("/");

    const currentMovie = movieFilm ? movieFilm.movieVideo : popularFilm ? popularFilm.movieVideo : ""
    const titleMovie = movieFilm ? movieFilm.title : popularFilm ? popularFilm.title : ""

    return (
        <div className="h-screen w-full bg-black">
            <NavbarFilm titleMovie={titleMovie} />
            <MovieVideo currentMovie={currentMovie} />
        </div>
    )
}
