import { Logo } from "@/components/shared";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (       
        <div className="min-h-screen relative">
            {/* Fondo */}
            <div className="absolute inset-0 -z-10">
                <div className="bg-black absolute inset-0">
                    <div className="bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat opacity-40 w-full h-full" />
                </div>
            </div>

            {/* Logo */}
            <div className="px-8 py-5 max-w-7xl mx-auto">
                <Logo />
            </div>

            {/* Contenido */}
            <div className="w-full max-w-md mx-auto">
                <div className="bg-black/70 px-14 py-16">
                    {children}
                </div>
            </div>
        </div>
    )
}
