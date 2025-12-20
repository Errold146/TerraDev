import { toast } from "sonner";
import { create } from "zustand";
import { Movie } from "@prisma/client";
import { createJSONStorage, persist } from "zustand/middleware";
import { useCurrentUser } from "./useCurretUser";

interface AddFilmMyList {
    favoritesFilmsByUser: {[userId: string]: Movie[]}
    addFavoriteFilm: (data: Movie) => void
    removeFavoriteFilm: (id: string) => void
}

export const useFavoritesFilms = create(persist<AddFilmMyList>((set, get) => ({
    favoritesFilmsByUser: {},

    addFavoriteFilm: (data: Movie) => {
        const { currentUser } = useCurrentUser.getState()
        if (!currentUser) return toast.warning("Seleccione un usuario e intente de nuevo");

        const currentFavoritesFilms = get().favoritesFilmsByUser[currentUser.id] || []
        const existingFavorite = currentFavoritesFilms.find(film => film.id === data.id)
        if (existingFavorite) return toast.info("La película ya es parte de Favoritos");

        set({ favoritesFilmsByUser: {
            ...get().favoritesFilmsByUser,
            [currentUser.id]: [...currentFavoritesFilms, data]
        }})

        toast.success("Película agregada a favoritos")
    },

    removeFavoriteFilm: (id: string) => {
        const { currentUser } = useCurrentUser.getState()
        if (!currentUser) return toast.warning("Seleccione un usuario e intente de nuevo");

        const currentFavoritesFilms = get().favoritesFilmsByUser[currentUser.id] || []

        set({
            favoritesFilmsByUser: {
                ...get().favoritesFilmsByUser,
                [currentUser.id]: currentFavoritesFilms.filter(film => film.id !== id)
            }
        })

        toast.success("Película eliminada de favoritos")

    }
}), {
    name: "add-favorites-films-by-user",
    storage: createJSONStorage(() => localStorage)
}))