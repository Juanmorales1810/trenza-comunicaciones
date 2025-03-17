import Image from "next/image";
import React from "react";
import Clients from "../clients";
import { Chart } from "../chart";
import { ParallaxCarousel } from "../parallax-carousel";
import Marquee from "../marquee";

export default function Hero() {
    return (
        <section className="container text-center w-full md:h-screen">
            <div className="grid grid-cols-1 grid-auto-rows gap-4 w-full h-full p-4 md:grid-cols-3 md:grid-rows-9 md:py-16">
                <div className="relative h-[calc(100dvh-32px)] rounded-xl transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group md:hover:scale-110 md:hover:shadow-lg md:hover:z-50 md:col-span-2 md:row-span-4 md:h-auto">
                    <video
                        className="absolute brightness-[1.25] right-1/2 bottom-1/2 min-w-full min-h-full max-w-none md:max-w-[600px] w-auto h-auto translate-x-1/2 translate-y-1/2 z-0 dark:brightness-[0.25] object-contain aspect-video"
                        autoPlay={true}
                        muted={true}
                        preload="auto"
                        loop={true}
                        poster="/img/landing/videoplayback.jpg"
                    >
                        <source
                            src="/video/videoplayback.webm"
                            type="video/webm"
                        />
                        <source
                            src="/video/videoplayback.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute w-full max-w-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[left_top_translate] duration-500 ease-in-out z-10 md:group-hover:-left-44 md:group-hover:translate-x-1/2 md:group-hover:top-64">
                        <Image
                            className="drop-shadow-[0_0px_17px_rgba(255,255,255,0.75)]"
                            src="/image/logoTrenza.png"
                            alt="logo"
                            width={384}
                            height={160}
                        />
                    </div>
                </div>
                <div className="relative h-auto rounded-xl bg-zinc-200 transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group md:hover:z-50 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-5 md:hover:scale-110 hover:shadow-lg">
                    <div className="absolute inset-0 z-0 scale-0 transition-transform duration-500 ease-in-out md:group-hover:scale-110">
                        <h1 className="sr-only">Trenza Comunicaciones</h1>
                        <p className="text-black text-lg mt-2">
                            Nuestros clientes
                        </p>
                    </div>
                    <Clients />
                </div>
                <div className="relative h-auto bg-slate-500 rounded-xl transition-[transform_shadow] duration-300 ease-in-out overflow-hidden md:hover:z-50 md:row-span-3 md:col-start-1 md:row-start-7 md:hover:scale-110 md:hover:shadow-lg">
                    <Image
                        className="brightness-[1.25] w-full h-full dark:brightness-[0.25] object-fill"
                        src="/image/hero/text.jpeg"
                        alt="hero"
                        width={600}
                        height={400}
                    />
                </div>
                <div className="relative h-auto rounded-xl transition-[transform_shadow] duration-300 ease-in-out overflow-hidden place-content-center bg-[url(/image/hero/marquee.jpeg)] bg-cover bg-center bg-no-repeat md:row-span-3 md:col-start-2 md:row-start-7 md:hover:scale-110 md:hover:shadow-lg md:hover:z-50">
                    <Marquee />
                </div>
                <div className="relative h-auto bg-slate-200 rounded-xl transition-[transform_shadow] duration-300 ease-in-out overflow-hidden bg-[url(/image/hero/chart.jpeg)] bg-cover bg-center bg-no-repeat md:row-span-5 md:col-start-3 md:row-start-1 md:hover:scale-110 md:hover:shadow-lg md:hover:z-50">
                    <Chart />
                </div>
                <div className="relative h-96 rounded-xl transition-[transform_shadow] duration-300 ease-in-out overflow-hidden md:hover:z-50 md:row-span-4 md:col-start-3 md:row-start-6 md:hover:scale-110 md:hover:shadow-lg md:h-auto">
                    <ParallaxCarousel />
                </div>
            </div>
        </section>
    );
}
