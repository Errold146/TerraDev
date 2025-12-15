"use client"

import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { popularMovies } from "./PopularMovies.data";

export function PopularMovie() {

    const [isLoading, setIsLoading] = useState(false)
    
    const uploadMovies = async () => {
        setIsLoading(true)

        try {
            await axios.post("/api/popular-movies", { movies: popularMovies })
            toast.success("Creación de películas exitosa")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <div className="border-2 border-azul-400 rounded-lg p-6 hover:bg-rojo-600 transition-all duration-200">
            <Button
                className="hover:bg-transparent bg-transparent cursor-pointer" 
                onClick={uploadMovies}
                disabled={isLoading}
            >
                Subir películas populares
                <Upload className="w-4 h-4" />
            </Button>
        </div>
    )
}
