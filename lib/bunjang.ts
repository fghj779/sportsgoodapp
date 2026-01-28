import { MerchContext } from '@/types';

const BUNJANG_SHOP_ID = '7651249';
const BUNJANG_BASE_URL = 'https://m.bunjang.co.kr/shop';

export function generateBunjangUrl(context: MerchContext): string {
  const { type, teamName, playerName } = context;

  let searchQuery: string;

  if (type === 'player' && playerName) {
    searchQuery = playerName;
  } else {
    searchQuery = `${teamName} 유니폼`;
  }

  const encodedQuery = encodeURIComponent(searchQuery);
  return `${BUNJANG_BASE_URL}/${BUNJANG_SHOP_ID}/products?q=${encodedQuery}`;
}

export function getBunjangShopUrl(): string {
  return `${BUNJANG_BASE_URL}/${BUNJANG_SHOP_ID}`;
}
