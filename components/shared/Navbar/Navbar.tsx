import { UserTerraDev } from "@prisma/client"
import { NavbarMovile } from "./NavbarMovile/NavbarMovile"
import { NavbarDesktop } from "./NavbarDesktop/NavbarDesktop"

interface Props {
   users: UserTerraDev[] 
}

export const Navbar = ({ users }: Props) => {
    return (
        <nav>
            <div className="hidden mx-auto md:block">
                <NavbarDesktop users={users} />
            </div>
            <div className="md:hidden">
                <NavbarMovile users={users} />
            </div>
        </nav>
    )
}
