'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Card({ children, className, animate = true }: CardProps) {
  const Wrapper = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  return (
    <Wrapper
      className={cn(
        'bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100',
        className
      )}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}
