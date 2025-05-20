'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes: string[] = [
  'Skills are the <span class="font-bold text-primary">currency</span> of progress—master them, and the world opens up.',
  'With every line of <span class="font-bold text-primary">code</span>, you shape the future. Keep building.',
  'Great skills aren’t born—they’re <span class="font-bold text-primary">coded</span>, styled, and refined.',
  'Master your <span class="font-bold text-primary">craft</span>, and every challenge becomes a component to conquer.',
  'Every skill you hone is a <span class="font-bold text-primary">pixel</span> in the masterpiece of your career.',
  'Skills are the <span class="font-bold text-primary">bridge</span> between dreams and reality—build them strong.',
];

const QuoteRotator = () => {
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center px-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-lg text-muted-foreground max-w-3xl"
          dangerouslySetInnerHTML={{ __html: quotes[currentQuote] }}
        />
      </AnimatePresence>
    </div>
  );
};

export default QuoteRotator;