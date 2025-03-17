import React from "react";
import TestimonialCarousel from "../testimonial-carousel";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export default function Testimonial() {
    return (
        <section className="py-32">
            <div className="container px-4">
                <Badge variant={"outline"} className="mb-6 text-white">
                    Casos de Éxito
                </Badge>
                <h2 className="text-4xl font-medium">
                    Historias de Éxito: Lo que Hemos Logrado para Nuestros
                    Clientes
                </h2>
                <p className="mt-4 text-zinc-400 max-w-[700px]">
                    Descubre cómo hemos ayudado a otras empresas en La Serena y
                    Coquimbo a alcanzar sus objetivos de marketing digital.
                    Desde mejorar el SEO hasta crear contenido visual de
                    impacto, nuestros clientes han logrado resultados medibles
                    con nuestras soluciones personalizadas.
                </p>
                <Separator className="my-10 bg-zinc-500" />
                <div className="relative rounded-2xl bg-zinc-800">
                    <TestimonialCarousel />
                </div>
            </div>
        </section>
    );
}
