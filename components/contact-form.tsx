"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Define the form validation schema with Zod
const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().optional(),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Initialize react-hook-form with zod resolver
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    // Handle form submission
    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form submitted:", data);
            setSubmitSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="mt-8 space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
                <Label htmlFor="fullName" className="text-black font-semibold">
                    Nombre completo
                </Label>
                <Input
                    id="fullName"
                    className="placeholder:text-zinc-700 border-zinc-600 text-black focus:bg-white/40"
                    placeholder="Nombre completo"
                    {...form.register("fullName")}
                    aria-invalid={!!form.formState.errors.fullName}
                />
                {form.formState.errors.fullName && (
                    <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.fullName.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-semibold">
                    Correo electrónico
                </Label>
                <Input
                    id="email"
                    className="placeholder:text-zinc-700 border-zinc-600 text-black focus:bg-white/40"
                    type="email"
                    placeholder="me@company.com"
                    {...form.register("email")}
                    aria-invalid={!!form.formState.errors.email}
                />
                {form.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.email.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className="text-black font-semibold">
                    Telefono
                </Label>
                <Input
                    id="phone"
                    className="placeholder:text-zinc-700 border-zinc-600 text-black focus:bg-white/40"
                    placeholder="Telefono"
                    type="number"
                    {...form.register("phone")}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-black font-semibold">
                    Tu mensaje
                </Label>
                <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    className="min-h-[120px] resize-none placeholder:text-zinc-700 border-zinc-600 text-black focus:bg-white/40"
                    {...form.register("message")}
                    aria-invalid={!!form.formState.errors.message}
                />
                {form.formState.errors.message && (
                    <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.message.message}
                    </p>
                )}
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
            </div>

            {submitSuccess && (
                <div className="p-4 bg-green-50 text-green-800 rounded-md dark:bg-green-900 dark:text-green-100">
                    <p className="text-sm">
                        ¡Gracias por tu mensaje! Nos pondremos en contacto
                        contigo pronto.
                    </p>
                </div>
            )}
        </form>
    );
}
