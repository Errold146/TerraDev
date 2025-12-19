
interface Props {
    genres: string[]
}

export function FilmGenres({ genres }: Props) {
    return (
        <div className="flex gap-4 text-white">
            {genres.map(gen => (
                <p key={gen}>{gen}</p>
            ))}
        </div>
    )
}
