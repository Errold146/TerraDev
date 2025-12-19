import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

import { UserTerraDev } from '@prisma/client';

interface CurrentUserInterface {
    currentUser: UserTerraDev | null
    changeCurrentUser: (data: UserTerraDev) => void
}

export const useCurrentUser = create(persist<CurrentUserInterface>(
    (set) => ({
        currentUser: null,
        changeCurrentUser: (data: UserTerraDev) => {
            set({currentUser: data})
        }
    }),
    {
        name: "current-user-terra-dev",
        storage: createJSONStorage(() => sessionStorage)
    }
))