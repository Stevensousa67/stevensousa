'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type GradientWord = {
    text: string;
    from: string;
    to: string;
}

const words: GradientWord[] = [
    { text: 'Attractive', from: 'from-blue-500', to: 'to-teal-500' },
    { text: 'Amazing', from: 'from-purple-500', to: 'to-pink-500' },
    { text: 'Stunning', from: 'from-red-500', to: 'to-yellow-500' },
    { text: 'Fantastic', from: 'from-green-500', to: 'to-blue-500' },
]

const WordRotator = () => {
    const [currentWord, setCurrentWord] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-block w-23 sm:w-36">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWord}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className={`text-xl sm:text-3xl font-bold bg-gradient-to-r ${words[currentWord].from} ${words[currentWord].to} bg-clip-text text-transparent text-center`}
                >
                    {words[currentWord].text}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default WordRotator;