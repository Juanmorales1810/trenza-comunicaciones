"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
    className?: string;
}

function ParallaxText({
    children,
    baseVelocity = 100,
    className,
}: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div
            className={`overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap ${className}`}
        >
            <motion.div
                className="font-medium uppercase text-5xl flex whitespace-nowrap flex-nowrap text-zinc-50"
                style={{ x }}
            >
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
                <span className="pl-3">{children} </span>
            </motion.div>
        </div>
    );
}

export default function Marquee() {
    return (
        <section className="[background-image:radial-gradient(rgba(0,0,0,0)_1px,var(--background)_1px)] [background-size:4px_4px] [backdrop-filter:blur(3px)] z-40">
            <ParallaxText baseVelocity={0.5} className="w-full">
                En Proceso En Proceso En Proceso En Proceso En Proceso En
                Proceso En Proceso En Proceso En Proceso
            </ParallaxText>
            <ParallaxText baseVelocity={-0.5} className="w-full">
                En Proceso En Proceso En Proceso En Proceso En Proceso En
                Proceso En Proceso En Proceso En Proceso
            </ParallaxText>
        </section>
    );
}
