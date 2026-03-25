"use client";

import { motion } from "motion/react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const getInitialDirection = () => {
        switch (direction) {
            case "up":
                return { y: 40, x: 0 };
            case "down":
                return { y: -40, x: 0 };
            case "left":
                return { x: 40, y: 0 };
            case "right":
                return { x: -40, y: 0 };
            case "none":
                return { x: 0, y: 0 };
            default:
                return { y: 0, x: 0 };
        }
    };

    const initial = { opacity: 0, ...getInitialDirection() };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like curve
            }}
            className={fullWidth ? `w-full ${className}` : className}
        >
            {children}
        </motion.div>
    );
}
