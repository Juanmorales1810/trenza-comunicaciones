"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

interface Providers {
    logo: string;
}

const proveedores: Providers[] = [
    {
        logo: "/providers/logo-01.png",
    },
    {
        logo: "/providers/logo-02.png",
    },
    {
        logo: "/providers/logo-03.png",
    },
    {
        logo: "/providers/logo-04.png",
    },
    {
        logo: "/providers/logo-05.png",
    },
    {
        logo: "/providers/logo-06.png",
    },
];

export default function Clients() {
    return (
        <div className="w-full h-auto">
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    AutoScroll({
                        playOnInit: true,
                        stopOnInteraction: false,
                        speed: 1,
                    }),
                ]}
                className="relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-36 before:bg-gradient-to-r before:from-zinc-200  before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-36 after:bg-gradient-to-l after:from-zinc-200 after:to-transparent"
            >
                <CarouselContent className="">
                    {proveedores.map((providers, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 lg:basis-1/4"
                        >
                            <TestimonialCard providers={providers} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

function TestimonialCard({ providers }: { providers: Providers }) {
    return (
        <article className="h-full flex justify-center items-center bg-transparent border-0 hover:bg-zinc-400/15 hover:border-zinc-50/20 transition-colors rounded-xl">
            <div className="p-10 text-black">
                <Image
                    src={providers.logo}
                    alt="Logo de clientes"
                    height={80}
                    width={135}
                />
            </div>
        </article>
    );
}
