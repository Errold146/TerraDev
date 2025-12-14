import Link from "next/link";

import { auth } from "@/auth";
import Remember from "./Remember";
import { LoginForm } from "./LoginForm";
import { Terms } from "../components/Terms";

export default async function LoginPage() {
    const session = await auth();

    return (
        <div>
            <p className="text-3xl font-bold text-left mb-7 text-rojo-600">
                Iniciar Sesión
            </p>
            
            <LoginForm />
            <Remember />

            <div className="mt-5 flex justify-between">
                <Link
                    href="/"
                    className="hover:underline hover:text-pastel-800 transition-colors duration-300"
                >
                    ¿Olvidé mi contraseña?
                </Link>
                <Link
                    href="/register"
                    className="text-white hover:text-azul-800 hover:underline transition-colors duration-300"
                >
                    Crear Cuenta
                </Link>
            </div>

            <Terms />
        </div>
    );
}
