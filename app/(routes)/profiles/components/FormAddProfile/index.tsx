"use client"

import { z } from "zod"
import axios from "axios"
import { toast } from "sonner"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"

import { formSchema } from "./FormAddProfile.form"
import { dataProfilesImages } from "./FormAddProfile.data"

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>
}

export function FormAddProfile({setOpen}: Props) {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profileName: "",
            avatarUrl: undefined
        },
    })
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true)
            const res = await axios.post("/api/userTerraDev", values)
            if ( res.status !== 200 ) {
                toast.error("Ocurrio un error, recargue e intente de nuevo")
            } else {
                toast.success("Perfil creado correctamente")
            }
            
            router.refresh()
            setOpen(false)

        } catch (error) {
            console.log(error)
            toast.error("Ocurrio un error, recargue e intente de nuevo")
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="profileName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre Perfil</FormLabel>
                            <FormControl>
                                <Input placeholder="Ej: Papá, Mamá, María, José" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="avatarUrl"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Selecciona tu avatar</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-4 gap-6 justify-items-center"
                                >
                                    {
                                        dataProfilesImages.map(img => (
                                            <FormItem 
                                                key={img.url}
                                                className="flex flex-col-reverse justify-center items-center space-y-0 cursor-pointer"
                                            >
                                                <FormControl className="text-white mt-1">
                                                    <RadioGroupItem value={img.url} />
                                                </FormControl>
                                                <FormLabel className="font-normal flex justify-center w-full">
                                                    <Image 
                                                        src={img.url}
                                                        alt="Imagen Perfil"
                                                        width={50}
                                                        height={50}
                                                        priority
                                                        className={field.value === img.url ? 'cursor-pointer border border-white' : ''}
                                                    />
                                                </FormLabel>
                                            </FormItem>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button 
                    type="submit"
                    className="text-azul-600 bg-azul-100 hover:text-azul-100 hover:bg-azul-600 transition-colors duration-300"
                    disabled={isLoading}
                >Crear Perfil</Button>
            </form>
        </Form>
    )
}
