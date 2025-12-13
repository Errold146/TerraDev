import { NavbarDesktop } from "./NavbarDesktop/NavbarDesktop"
import { NavbarMovile } from "./NavbarMovile/NavbarMovile"

export const Navbar = () => {
    return (
        <nav>
            <div className="hidden mx-auto md:block">
                <NavbarDesktop />
            </div>
            <div className="md:hidden">
                <NavbarMovile />
            </div>
        </nav>
    )
}
