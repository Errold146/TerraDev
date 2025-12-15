"use client"

import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { dataMovies } from "./NormalMovie.data";

export function NormalMovie() {

    const [isLoading, setIsLoading] = useState(false)

    const uploadMovies = async () => {

        setIsLoading(true)

        try {
            await axios.post("/api/create-movies", { movies: dataMovies})
            toast.success("Películas subidas exitosamente")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <div className="border-2 border-azul-400 rounded-lg p-6 hover:bg-rojo-600 transition-all duration-200">
            <Button 
                className="bg-transparent hover:bg-transparent cursor-pointer"
                onClick={uploadMovies}
                disabled={isLoading}
            >
                Subir películas normales <Upload className="w-4 h-4"  /> 
            </Button>
        </div>
    )
}
