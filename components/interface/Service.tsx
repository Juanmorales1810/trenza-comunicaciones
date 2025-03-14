import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

const features = [
    {
        id: 1,
        name: "Estrategia de Marketing Digital",
        description:
            "Creamos estrategias de marketing digital personalizadas para maximizar tu retorno de inversión.",
        imageUrl: "/image/service/marketing-svgrepo-com.svg",
    },
    {
        id: 2,
        name: "Posicionamiento Web en Google ",
        description:
            "Mejoramos tu ranking en los resultados de búsqueda de Google para atraer más tráfico orgánico.",
        imageUrl:
            "/image/service/seo-up-arrows-symbol-in-a-circle-svgrepo-com.svg",
    },
    {
        id: 3,
        name: "Fotografía Profesional",
        description:
            "Capturamos la esencia de tu marca con imágenes de alta calidad, desde productos hasta retratos corporativos.",
        imageUrl: "/image/service/photograph-svgrepo-com.svg",
    },
    {
        id: 4,
        name: "Videografía y Drones",
        description:
            " Creación de contenido visual impactante que cuenta tu historia y conecta con tu audiencia.",
        imageUrl: "/image/service/video-svgrepo-com.svg",
    },
    {
        id: 5,
        name: "Diseño Gráfico y Publicitario",
        description:
            "Diseños que comunican efectivamente tu mensaje y hacen destacar tu marca.",
        imageUrl: "/image/service/design-education-painting-svgrepo-com.svg",
    },
    {
        id: 6,
        name: "Copywriting",
        description:
            "Redacción persuasiva optimizada para SEO que convierte visitantes en clientes.",
        imageUrl: "/image/service/edit-clipboard-svgrepo-com.svg",
    },
    {
        id: 7,
        name: "Gestión de Redes Sociales",
        description:
            "Creación de contenido y gestión de redes sociales para conectar con tu audiencia.",
        imageUrl: "/image/service/like-1386-svgrepo-com.svg",
    },
    {
        id: 8,
        name: "Creación de Páginas Web",
        description:
            "Diseñamos y desarrollamos páginas web rápidas, optimizadas y con una experiencia de usuario excepcional.",
        imageUrl:
            "/image/service/web-internet-seo-browser-network-website-url-svgrepo-com.svg",
    },
    {
        id: 9,
        name: "Rediseño de Páginas Web",
        description:
            "Actualizamos tu sitio web para que esté alineado con las últimas tendencias y tecnologías.",
        imageUrl:
            "/image/service/web-programming-code-on-window-svgrepo-com.svg",
    },
];

export default function Service() {
    return (
        <section className="relative py-32 ">
            <div className="absolute -z-10 left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#09090b)] blur-xl"></div>
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <h2 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Servicios Personalizados para Impulsar tu Negocio
                    </h2>
                    <p className="mb-8 max-w-3xl text-lg text-zinc-300 sm:text-xl">
                        Ofrecemos una variedad de servicios de marketing digital
                        diseñados para mejorar cada aspecto de tu presencia en
                        línea
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <Card
                            key={feature.id}
                            className="bg-transparent flex items-center backdrop-blur-md rounded-sm border border-zinc-500 py-6 px-4 shadow-none hover:bg-zinc-600/30 transition-colors duration-300 ease-in-out"
                        >
                            <a href="#" className="hover:opacity-70">
                                <Image
                                    src={feature.imageUrl}
                                    alt={feature.name}
                                    className="mr-8 size-16 rounded-md bg-muted object-contain p-2"
                                    width={64}
                                    height={64}
                                />
                            </a>
                            <div className="w-full flex-grow">
                                <h3 className="text-md font-semibold text-white">
                                    {feature.name}
                                </h3>
                                <p className="mt-1 text-xs text-zinc-400">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button variant={"link"} className="text-white">
                        Contáctenos
                    </Button>
                </div>
            </div>
        </section>
    );
}
