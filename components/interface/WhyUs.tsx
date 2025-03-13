import { ArrowRightIcon, ChevronRight } from "lucide-react";
import React from "react";

export default function WhyUs() {
    return (
        <section className="relative py-32">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(85,100,231,0.5)] opacity-50 blur-[80px]"></div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="aspect-[5/6] overflow-clip rounded-3xl bg-accent">
                        <img
                            src="/placeholder.svg"
                            alt="placeholder"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="flex shrink-0 flex-col justify-center md:w-1/2 md:py-16 lg:mr-8 lg:pl-24 lg:text-left 2xl:pl-32">
                        <p className="mb-6 text-xs font-medium uppercase tracking-wider">
                            Tag Line
                        </p>
                        <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-5xl">
                            Tu Socio Estratégico en Marketing Digital
                        </h2>
                        <p className="mb-6 text-zinc-300 lg:text-xl">
                            En Trenza Comunicaciones, somos una agencia de
                            marketing digital ubicada en La Serena, Chile,
                            especializada en ayudar a empresas e instituciones
                            de Coquimbo a destacarse en el mundo digital.
                            Utilizamos un enfoque estratégico y creativo para
                            generar resultados tangibles que aumenten tu
                            visibilidad en línea, atraigan más clientes y hagan
                            crecer tu negocio.
                        </p>
                        <a
                            href="#"
                            className="group mb-12 flex items-center pb-3 text-zinc-400 lg:text-xl"
                        >
                            Contáctenos
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <div className="flex flex-col gap-6 md:flex-row">
                            <a
                                href="#"
                                className="group flex-1 rounded-xl border border-border p-6"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center">
                                        <span
                                            data-slot="avatar"
                                            className="relative flex shrink-0 overflow-hidden rounded-full size-10"
                                        >
                                            <img
                                                data-slot="avatar-image"
                                                className="aspect-square size-full"
                                                src="/images/block/avatar-1.webp"
                                            />
                                        </span>
                                        <span
                                            data-slot="avatar"
                                            className="relative flex shrink-0 overflow-hidden rounded-full -ml-3 size-10"
                                        >
                                            <img
                                                data-slot="avatar-image"
                                                className="aspect-square size-full"
                                                src="/images/block/avatar-3.webp"
                                            />
                                        </span>
                                        <span
                                            data-slot="avatar"
                                            className="relative flex shrink-0 overflow-hidden rounded-full -ml-3 size-10"
                                        >
                                            <img
                                                data-slot="avatar-image"
                                                className="aspect-square size-full"
                                                src="/images/block/avatar-2.webp"
                                            />
                                        </span>
                                    </div>
                                    <ChevronRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                </div>
                                <p className="mt-8 font-medium lg:text-lg">
                                    Action 1
                                </p>
                            </a>
                            <a
                                href="#"
                                className="group flex-1 rounded-xl border border-border p-6"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src="/images/block/block-1.svg"
                                            alt="placeholder hero"
                                            className="size-12 object-cover object-center"
                                        />
                                    </div>
                                    <ChevronRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                </div>
                                <p className="mt-8 font-medium lg:text-lg">
                                    Action 2
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
