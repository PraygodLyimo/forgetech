"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CalendarProps = {
    mode?: "single";
    selected?: Date;
    className?: string;
};

export function Calendar({ selected, className }: CalendarProps) {
    const currentDate = selected || new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    return (
        <div className={cn("p-3 bg-white rounded-lg shadow-sm", className)}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="font-medium text-gray-500 p-2">
                        {day}
                    </div>
                ))}
                {blanks.map((blank) => (
                    <div key={`blank-${blank}`} className="p-2" />
                ))}
                {days.map((day) => (
                    <div
                        key={day}
                        className={cn(
                            "p-2 rounded-md hover:bg-gray-100 cursor-pointer",
                            day === currentDate.getDate() && "bg-[#ff6219] text-white hover:bg-[#e55a17]"
                        )}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
