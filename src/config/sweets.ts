export type SweetId = 'brigadeiro' | 'beijinho' | 'boloGelado';

export interface SweetItem {
  id: SweetId;
  /** Caminho da foto em public/, ex: '/images/doces/brigadeiro.webp' (gerada por `npm run imagens`). Sem foto = placeholder. */
  image?: string;
  /** Peso de cada unidade, em gramas (etiqueta no card) */
  weightGrams?: number;
  /** Preço em ienes e a que se refere: por cento ('hundred') ou o bolo inteiro ('whole') */
  price: { yen: number; unit: 'hundred' | 'whole' };
}

export const sweets: SweetItem[] = [
  { id: 'brigadeiro', image: '/images/doces/brigadeiro.webp', weightGrams: 12, price: { yen: 6000, unit: 'hundred' } },
  { id: 'beijinho', image: '/images/doces/beijinho.webp', weightGrams: 12, price: { yen: 6000, unit: 'hundred' } },
  { id: 'boloGelado', image: '/images/doces/bolo-gelado-doce-de-leite-nozes.webp', price: { yen: 3500, unit: 'whole' } },
];
