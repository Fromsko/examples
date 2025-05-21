"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
}

export function TypingAnimation({ text, duration = 200, className }: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [i, setI] = useState<number>(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => clearInterval(typingEffect);
    }, [i, text, duration]);

    return (
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`font-display text-center text-4xl font-bold tracking-tight drop-shadow-sm ${className}`}
        >
            {displayedText || text}
        </motion.h1>
    );
}

export function TypingAnimationDemo() {
    return (
        <div className="absolute top-35 left-0 right-0 text-4xl space-y-4 select-none">
            <TypingAnimation className="font-bold font-mono text-blue-500" text="Hello friend, welcome to my site." duration={80}/>
            <TypingAnimation className="font-bold font-sans text-teal-400/80" text="你好朋友, 欢迎来到我的站点." />
        </div>
    );
}
