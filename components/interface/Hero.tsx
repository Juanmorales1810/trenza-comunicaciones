import Image from "next/image";
import React from "react";
import Clients from "../clients";
import { Chart } from "../chart";
import { ParallaxCarousel } from "../parallax-carousel";

export default function Hero() {
    return (
        <section className="container text-center h-[100svh] w-full md:h-screen">
            <div className="grid grid-cols-3 grid-rows-9 gap-4 py-16 w-full h-full">
                <div className="relative col-span-2 row-span-4 rounded-xl hover:scale-110 hover:shadow-lg transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group hover:z-50">
                    <video
                        className="absolute brightness-[1.25] right-1/2 bottom-1/2 min-w-full min-h-full max-w-[600px] w-auto h-auto translate-x-1/2 translate-y-1/2 z-0 dark:brightness-[0.25] blur-sm md:blur-none object-contain aspect-video"
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
                    <div className="absolute w-full max-w-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-left-44 group-hover:translate-x-1/2 group-hover:top-64 transition-[left_top_translate] duration-500 ease-in-out z-10">
                        <Image
                            className="drop-shadow-[0_0px_17px_rgba(255,255,255,0.75)]"
                            src="/image/logoTrenza.png"
                            alt="logo"
                            width={384}
                            height={160}
                        />
                    </div>
                </div>
                <div className="relative col-span-2 row-span-2 col-start-1 row-start-5 rounded-xl hover:scale-110 bg-zinc-200 hover:shadow-lg transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group hover:z-50">
                    <div className="absolute inset-0 z-0 scale-0 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                        <h1 className="text-5xl text-zinc-50 font-semibold sr-only">
                            Trenza Comunicaciones
                        </h1>
                        <p className="text-black text-lg mt-2">
                            Nuestros clientes
                        </p>
                    </div>
                    <Clients />
                </div>
                <div className="relative row-span-3 col-start-1 row-start-7 bg-slate-500 rounded-xl  hover:scale-110 hover:shadow-lg transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group hover:z-50">
                    3
                </div>
                <div className="relative row-span-3 col-start-2 row-start-7 bg-slate-500 rounded-xl  hover:scale-110 hover:shadow-lg transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group hover:z-50">
                    4
                </div>
                <div className="relative row-span-5 col-start-3 row-start-1 bg-slate-200 rounded-xl  hover:scale-110 hover:shadow-lg transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group hover:z-50">
                    <Chart />
                </div>
                <div className="relative row-span-4 col-start-3 row-start-6 bg-slate-500 rounded-xl  hover:scale-110 hover:shadow-lg transition-[transform_shadow] duration-300 ease-in-out overflow-hidden group hover:z-50">
                    <ParallaxCarousel />
                </div>
            </div>
        </section>
    );
}
