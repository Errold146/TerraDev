import { Button } from "@/components/ui/button"
import { Info, Play } from "lucide-react"

export const SliderVideo = () => {
    return (
        <div className="relative w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]">
            <video 
                autoPlay
                loop
                muted
                className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
                src='/videos/video-1.mp4'
            />

            <div 
                className="flex flex-col justify-end absolute w-full md:w[36%] px-4 md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]"
            >
                <div className="pt-24 md:pt-0">
                    <h2 className="text-2xl md:text-5xl lg:text-8xl font-bold drop-shadow-xl">TerraDev</h2>
                    <p className="max-w-md mt-2 text-xs md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 my-5">
                        <Button size='lg' className="bg-azul-700 hover:bg-azul-900">
                            <Play className="h-6 w-6 mr-2 fill-azul-900" />
                            Reproducir
                        </Button>
                        <Button size='lg' className="bg-pastel-700 hover:bg-pastel-900">
                            <Info className="h-6 w-6 mr-2" />
                            Información
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw] -bottom-16 absolute bg-gradient-video" />
        </div>
    )
}
