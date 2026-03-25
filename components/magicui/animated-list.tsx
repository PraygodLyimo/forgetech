"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export function AnimatedList({
    className,
    children,
    delay = 1000,
    ...props
}: ComponentPropsWithoutRef<"div"> & { delay?: number }) {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);

        return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
        () => childrenArray.slice(0, index + 1).reverse(),
        [index, childrenArray],
    );

    return (
        <div className={cn("flex flex-col items-center gap-4", className)} {...props}>
            <AnimatePresence>
                {itemsToShow.map((item) => (
                    <AnimatedListItem key={(item as React.ReactElement).key}>
                        {item}
                    </AnimatedListItem>
                ))}
            </AnimatePresence>
        </div>
    );
}

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, originY: 0 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
            className="mx-auto w-full"
        >
            {children}
        </motion.div>
    );
}
