"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Terms() {

    const [shoeExtraTerms, setShoeExtraTerms] = useState(false)

    return (
        <div className="text-xs mt-4 mb-3 text-gray-400 max-w-72">
            <div className="mb-5 flex flex-col">
                <span>
                    Esta página utiliza Google reCAPTCHA para verificar que no eres un robot
                </span>

                <Button 
                    onClick={() => setShoeExtraTerms(!shoeExtraTerms)}
                    className="m-2 bg-black/80 text-azul-600 hover:text-white hover:bg-azul-600 transition-colors duration-300"
                >Más Información</Button>
            </div>

            <div>
                {
                    shoeExtraTerms && (
                        <p>La información recopilada por Google reCAPTCHA está sujeta a la Política de Privacidad y las Condiciones de Servicio de Google, y se utiliza para proporcionar, mantener y mejorar el servicio de reCAPTCHA, así como para fines generales de seguridad (Google no la utiliza para publicidad personalizada).</p>
                    )
                }
            </div>
        </div>
    )
}
