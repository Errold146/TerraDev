"use client"

import Link from "next/link";
import { useState } from "react";

import { Terms } from "../components/Terms";
import { LoginForm } from "./LoginForm";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
    const [remember, setRemember] = useState(false);

    return (
        <div>
            <p className="text-3xl font-bold text-left mb-7 text-rojo-600">
                Iniciar Sesión
            </p>
            
            <LoginForm />

            <div className="flex items-center gap-2 mt-4">
                <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(v) => setRemember(!!v)}
                    className="peer border-white data-[state=checked]:border-azul-600 
                    data-[state=checked]:bg-azul-600 data-[state=checked]:text-white"
                />
                <label
                    htmlFor="remember"
                    className="text-white peer-data-[state=checked]:text-azul-600
                    peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors"
                >
                    Recordar Usuario
                </label>
            </div>

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
