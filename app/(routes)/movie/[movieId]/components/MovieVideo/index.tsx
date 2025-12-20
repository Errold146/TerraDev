"use client"

import dynamic from "next/dynamic"

interface Props {
    currentMovie: string
}

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

export function MovieVideo({ currentMovie }: Props) {
    return (
        <ReactPlayer 
            src={currentMovie}
            loop={true}
            width="100%"
            height="100%"
            playing={true}
            muted={false}
            controls={true}
        />
    )
}
