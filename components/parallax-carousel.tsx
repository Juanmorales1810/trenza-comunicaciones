"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const items: CarouselItem[] = [
    {
        id: 1,
        title: "Naturaleza",
        description: "Explora paisajes impresionantes",
        imageUrl: "/placeholder.svg",
    },
    {
        id: 2,
        title: "Arquitectura",
        description: "Descubre estructuras fascinantes",
        imageUrl: "/placeholder.svg",
    },
    {
        id: 3,
        title: "Tecnología",
        description: "Innovación y futuro",
        imageUrl: "/placeholder.svg",
    },
];

export function ParallaxCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yValues = items.map((_, index) => {
        return useTransform(
            scrollYProgress,
            [0, 1],
            [0, index % 2 === 0 ? 100 : -100]
        );
    });

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div
            className="relative h-full w-full overflow-hidden"
            ref={containerRef}
        >
            {items.map((item, index) => {
                // Create a different parallax effect for each layer
                const y = yValues[index];

                return (
                    <motion.div
                        key={item.id}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-1000",
                            index === currentIndex
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                        )}
                        initial={false}
                    >
                        <motion.div
                            className="absolute inset-0 z-0"
                            style={{ y }}
                        >
                            <Image
                                src={item.imageUrl || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/30 z-10" />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white"
                            initial={{ y: 50, opacity: 0 }}
                            animate={
                                index === currentIndex
                                    ? { y: 0, opacity: 1 }
                                    : { y: 50, opacity: 0 }
                            }
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-2">
                                {item.title}
                            </h2>
                            <p className="text-xl">{item.description}</p>
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            index === currentIndex
                                ? "w-8 bg-white"
                                : "bg-white/50"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
