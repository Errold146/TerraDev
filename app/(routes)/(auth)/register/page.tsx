import Link from "next/link";

import { Terms } from "../components/Terms";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
    return (
        <div>
            <p className="text-3xl font-bold text-left mb-7 text-rojo-600">
                Crear Cuenta
            </p>

            <RegisterForm />

            <div className="mt-5 flex justify-between">
                <Link
                    href="/"
                    className="hover:underline hover:text-pastel-800 transition-colors duration-300"
                >
                    ¿Olvidé mi contraseña?
                </Link>
                <Link
                    href="/login"
                    className="text-white hover:text-azul-800 hover:underline transition-colors duration-300"
                >
                    Iniciar Sesión
                </Link>
            </div>

            <Terms />
        </div>
    )
}
