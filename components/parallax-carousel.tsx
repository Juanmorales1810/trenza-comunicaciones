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
        title: "Marketing",
        description: "Estrategias efectivas",
        imageUrl: "/image/hero/marketing.jpeg",
    },
    {
        id: 2,
        title: "Redes Sociales",
        description: "Gestión de redes sociales",
        imageUrl: "/image/hero/redes-sociales.jpeg",
    },
    {
        id: 3,
        title: "Desarrollo Web",
        description: "Diseño y desarrollo de sitios web",
        imageUrl: "/image/hero/ui-ux-representations-with-laptop.jpg",
    },
];

export function ParallaxCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Definir los valores de transformación en el nivel superior del componente
    const yValue0 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yValue1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yValue2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Crear un array con los valores de transformación
    const yValues = [yValue0, yValue1, yValue2];

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
                            <h2 className="text-2xl font-bold mb-1">
                                {item.title}
                            </h2>
                            <p className="text-md">{item.description}</p>
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
