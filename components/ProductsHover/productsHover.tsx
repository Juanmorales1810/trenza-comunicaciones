"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

type EffectSettings = { x: number; y: number; r: number };

export default function ProductsHover() {
    const listRef = useRef<HTMLDivElement>(null);
    const boxesRef = useRef<HTMLDivElement[]>([]);
    const [effectCache, setEffectCache] = useState<EffectSettings[][]>([]);
    const [hoverEffect, setHoverEffect] = useState<EffectSettings[]>([]);

    const products = [
        "Air Force 1",
        "Air Jordan 1",
        "Huarache",
        "Dunk",
        "Air Max",
    ];

    const random = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        const generateEffectCache = () => {
            const list = listRef.current;
            if (!list) return;

            const items = list.querySelectorAll("li");
            const cache: EffectSettings[][] = [];

            items.forEach(() => {
                const settings: EffectSettings[] = [];
                boxesRef.current.forEach(() => {
                    settings.push({
                        x: random(-25, 25),
                        y: random(-25, 25),
                        r: random(-25, 25),
                    });
                });
                cache.push(settings);
            });

            setEffectCache(cache);
        };

        generateEffectCache();
        window.addEventListener("resize", generateEffectCache);

        return () => {
            window.removeEventListener("resize", generateEffectCache);
        };
    }, []);

    const handleHover = (index: number) => {
        if (effectCache[index]) {
            setHoverEffect(effectCache[index]);
        }
    };

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const list = listRef.current;
        if (!list) return;

        const { clientX: x, clientY: y } = event;
        const {
            x: offsetX,
            y: offsetY,
            width,
            height,
        } = list.getBoundingClientRect();

        const px = (x - offsetX) / width - 0.5;
        const py = (y - offsetY) / height - 0.5;

        boxesRef.current.forEach((box) => {
            if (box) {
                box.style.setProperty("--px", `${px}`);
                box.style.setProperty("--py", `${py}`);
            }
        });
    };

    return (
        <section className="container mx-auto flex flex-col justify-center items-center h-screen">
            <h2 className="text-5xl">Products</h2>
            <div
                className="relative mt-10 flex justify-center items-center"
                ref={listRef}
                onMouseMove={handleMouseMove}
            >
                <ul>
                    {products.map((product, index) => (
                        <li
                            key={product}
                            onMouseEnter={() => handleHover(index)}
                            className="text-5xl"
                        >
                            <a href="#">{product}</a>
                        </li>
                    ))}
                </ul>
                <div className="holding">
                    <div className="scope">
                        {[...Array(3)].map((_, i) => (
                            <div className="holder" key={i}>
                                <motion.div
                                    className="box"
                                    ref={(el) => {
                                        if (el) boxesRef.current[i] = el;
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                        x: hoverEffect[i]?.x || 0,
                                        y: hoverEffect[i]?.y || 0,
                                        rotate: hoverEffect[i]?.r || 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                    }}
                                >
                                    {products.map((product, j) => (
                                        <img
                                            key={j}
                                            src={`https://assets.codepen.io/605876/${product
                                                .toLowerCase()
                                                .replace(/ /g, "-")}-${
                                                j + 1
                                            }.jpeg?width=204&height=153&format=auto`}
                                            alt=""
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
