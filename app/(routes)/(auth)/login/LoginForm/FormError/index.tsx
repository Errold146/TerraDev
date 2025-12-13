import { TriangleAlert } from 'lucide-react'

interface Props {
    message?: string
}

export function FormError({message}: Props) {

    if ( !message ) return null;

    return (
        <div
            className='bg-destructive/50 p-3 rounded-md flex items-center gap-x-2 text-sm text-white'
        >
            <TriangleAlert />
            <p>{message}</p>
        </div>
    )
}
