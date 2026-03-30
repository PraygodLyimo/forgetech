"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
    Code,
    Brain,
    Shield,
    Cloud
} from "lucide-react";

// Common Circle Component
const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

// Logo replacement for center
const CenterLogo = () => (
    <div className="flex flex-col items-center justify-center">
        <span className="text-xs font-bold text-[#ff6219]">FORGE</span>
        <span className="text-[10px] text-gray-500">TECH</span>
    </div>
);

export default function AnimatedBeamMultipleOutputDemo({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-background p-10",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        <Code className="h-6 w-6 text-[#ff6219]" />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Cloud className="h-6 w-6 text-[#ff6219]" />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="relative flex items-center justify-center">
                        <Circle ref={div3Ref}>
                            <CenterLogo />
                        </Circle>
                    </div>

                    {/* Nothing on right middle specifically, but spacing works out */}
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref}>
                        <Brain className="h-6 w-6 text-[#ff6219]" />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Shield className="h-6 w-6 text-[#ff6219]" />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div1Ref}
                curvature={-50}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div2Ref}
                curvature={50}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={50}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div5Ref}
                curvature={-50}
                endYOffset={-10}
                reverse
            />
        </div>
    );
}
