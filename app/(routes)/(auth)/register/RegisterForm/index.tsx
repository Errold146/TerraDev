"use client"

import { z } from "zod"
import axios from "axios"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"

import { formSchema } from "./RegisterForm.form"

export function RegisterForm() {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },
    })
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/auth/register", values)
            toast.success("Usuario Creado Correctamente")
            setTimeout(() => {
                router.push("/profiles")
            }, 2000);

        } catch (error) {
            console.log(error)
            toast.error("Ocurrio un error, intente de nuevo")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Email de usuario" 
                                    {...field} 
                                    value={field.value ?? ''}
                                    type="email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input 
                                placeholder="Password de usuario" 
                                {...field} 
                                value={field.value ?? ''}
                                type="password"
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="repeatPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Repetir Password</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Confirmar el password" 
                                    {...field} 
                                    value={field.value ?? ''}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button 
                    type="submit"
                    className="text-pastel-600 bg-black/80 hover:text-white hover:bg-pastel-600 transition-colors duration-300"
                >Crear Cuenta</Button>
            </form>
        </Form>
    )
}
