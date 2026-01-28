'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { MerchContext } from '@/types';
import { generateBunjangUrl } from '@/lib/bunjang';

interface BunjangButtonProps {
  context: MerchContext;
  className?: string;
}

export default function BunjangButton({ context, className = '' }: BunjangButtonProps) {
  const url = generateBunjangUrl(context);
  const label = context.type === 'player' && context.playerName
    ? `${context.playerName} 굿즈 구매`
    : `${context.teamName} 유니폼 구매`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      <ShoppingBag size={20} />
      <span>{label}</span>
      <ExternalLink size={16} className="opacity-70" />
    </motion.a>
  );
}
