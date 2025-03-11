import Marquee from "@/components/marquee";
import ProductsHover from "@/components/ProductsHover/productsHover";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full overflow-hidden">
            {/* <section className="relative text-center justify-center h-[100svh] w-full overflow-hidden md:h-screen">
                <video
                    className="brightness-[1.25] min-w-full min-h-full max-w-none w-full h-full z-0 dark:brightness-[0.25] blur-sm md:blur-none object-contain aspect-video"
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    loop={true}
                    poster="/img/landing/videoplayback.jpg"
                    src="/video/videoplayback.webm"
                />
                <div className="absolute w-full max-w-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        className="drop-shadow-[0_0px_17px_rgba(255,255,255,0.75)]"
                        src="/image/logoTrenza.png"
                        alt="logo"
                        width={384}
                        height={160}
                    />
                </div>
                <Marquee />
            </section> */}
            <ProductsHover />
        </main>
    );
}
