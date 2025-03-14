import { Play } from "lucide-react";
import React from "react";

export default function Cta() {
    return (
        <section className="py-32">
            <div className="container overflow-hidden">
                <div className="relative mx-auto flex max-w-screen-xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 bg-[url(/image/hero/marquee.jpeg)] bg-cover bg-center bg-no-repeat md:flex-row">
                    <div className="max-w-xl self-center p-6 md:p-12">
                        <h2 className="text-3xl font-semibold text-black md:text-4xl">
                            ¿Listo para llevar tu negocio al siguiente nivel?
                        </h2>
                        <p className="mt-4 text-zinc-900 md:text-lg">
                            ¡Es hora de llevar tu negocio al siguiente nivel!
                            Solicita tu consulta gratuita y descubre cómo
                            podemos ayudarte a lograr tus objetivos en línea..
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
                            >
                                Consulta ahora
                            </button>
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3"
                            >
                                Ver video
                                <Play className="ml-2" />
                            </button>
                        </div>
                    </div>
                    <div className="relative ml-6 max-h-96 md:ml-0 md:mt-8">
                        <img
                            src="/image/cta/cta-background.svg"
                            alt="placeholder"
                            className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
                        />
                        <img
                            src="/image/cta/cta.jpeg"
                            alt="placeholder"
                            className="z-10 aspect-video h-full w-full rounded-tl-xl border-l border-t object-cover object-top pl-3.5 pt-3.5 backdrop-blur-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
