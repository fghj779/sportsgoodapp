'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { MerchContext } from '@/types';
import { generateBunjangUrl } from '@/lib/bunjang';

interface MerchBlockProps {
  context: MerchContext;
  title?: string;
  description?: string;
}

export default function MerchBlock({
  context,
  title = '나의 팀 굿즈 구매하기',
  description = '번개장터에서 유니폼, 모자, 응원도구를 만나보세요!',
}: MerchBlockProps) {
  const url = generateBunjangUrl(context);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="block bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <ShoppingBag size={28} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-800">{title}</h3>
            <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-semibold rounded-full">
              AD
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex items-center gap-1 text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>번개장터에서 보기</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
