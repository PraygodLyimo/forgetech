"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps extends MotionProps {
    /** The text content to be animated */
    text: string;
    /** Optional className for styling */
    className?: string;
    /** Duration of the animation in milliseconds */
    duration?: number;
    /** Delay before animation starts in milliseconds */
    delay?: number;
    /** Component to render as - defaults to div */
    as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** Custom character set for scramble effect. Defaults to uppercase alphabet */
    characterSet?: string[];
}

const DEFAULT_CHARACTER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()".split("");

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

// Static motion components to satisfy react-hooks/static-components
const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionH3 = motion.h3;

export function EncryptedText({
    text,
    className,
    duration = 800,
    delay = 0,
    as: Component = "div",
    characterSet = DEFAULT_CHARACTER_SET,
    ...props
}: EncryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    // Select the appropriate static motion component
    let MotionComp: any = MotionDiv;
    switch (Component) {
        case "span": MotionComp = MotionSpan; break;
        case "p": MotionComp = MotionP; break;
        case "h1": MotionComp = MotionH1; break;
        case "h2": MotionComp = MotionH2; break;
        case "h3": MotionComp = MotionH3; break;
        default: MotionComp = MotionDiv;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsAnimating(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isAnimating) return;

        const iterations = text.length;
        const startTime = performance.now();
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Calculate how many characters should be revealed based on progress
            const revealedCount = Math.floor(progress * iterations);

            const shuffled = text
                .split("")
                .map((char, index) => {
                    if (char === " ") return " ";
                    if (index < revealedCount) return text[index];
                    return characterSet[getRandomInt(characterSet.length)];
                })
                .join("");

            setDisplayText(shuffled);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
                setDisplayText(text); // Ensure final text is exact
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isAnimating, text, duration, characterSet]);

    return (
        <MotionComp
            ref={elementRef as any}
            className={cn("inline-block", className)}
            {...props}
        >
            {displayText}
        </MotionComp>
    );
}
