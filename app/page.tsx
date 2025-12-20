import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { db } from "@/lib/db";

import { Navbar } from "@/components/shared";
import { ListMovies } from "./(routes)/(home)/components/ListMovies";
import { SliderVideo } from "./(routes)/(home)/components/SliderVideo";
import { PopularMovies } from "./(routes)/(home)/components/PopularMovies";

export default async function Home() {

	const session = await auth()
	if ( !session || !session.user || !session.user.id ) return redirect("/login");

	const userTerraDev = await db.userTerraDev.findMany({ where: { userId: session.user.id }})
	const movies = await db.movie.findMany()
	const popularMovies = await db.popularMovie.findMany({ orderBy: { ranking: "asc" }})

	return (
		<div className="relative bg-zinc-900 min-h-screen">
			<Navbar users={userTerraDev} />
			<SliderVideo />
			<PopularMovies movies={popularMovies} />
			<ListMovies movies={movies} />
		</div>
	)
}
