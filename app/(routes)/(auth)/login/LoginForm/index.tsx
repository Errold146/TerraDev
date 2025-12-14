"use client"

import { z } from "zod"
import { toast } from "sonner"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"

import { login } from "@/actions/login"
import { FormError } from "./FormError"
import { formSchema } from "./LoginForm.form"
import { useRouter } from "next/navigation"

export function LoginForm() {

    const router = useRouter()
    const [error, setError] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            login(values).then(data => {
                setError(data?.error)

                if ( data?.success ) {
                    toast.success("Sesión iniciada correctamente")
                }
            })
            router.push("/profiles")
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Email de registro" 
                                    className="h-10" 
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
                                    placeholder="Password de registro" 
                                    className="h-10" 
                                    {...field} 
                                    value={field.value ?? ''}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormError message={error} />

                <Button 
                    type="submit"
                    className="text-pastel-600 bg-black/80 hover:text-white hover:bg-pastel-600 transition-colors duration-300"
                >Iniciar Sesión</Button>
            </form>
        </Form>
    )
}
