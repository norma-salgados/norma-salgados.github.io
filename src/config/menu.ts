export type MenuItemId =
  | 'coxinha'
  | 'bolinhoCarne'
  | 'bolinhoQueijo'
  | 'bolinhaPizza'
  | 'kibe';

export interface MenuItem {
  id: MenuItemId;
  /** Caminho da foto em public/, ex: '/images/salgados/coxinha-de-frango.webp' (gerada por `npm run imagens`). Sem foto = placeholder. */
  image?: string;
}

/** Peso de cada salgado, em gramas (exibido no cardápio) */
export const itemWeightGrams = 25;

/** Preço (ienes) por cento — sabores podem ser misturados */
export const priceYen = { fried: 4500, frozen: 4000 };
export const unitsPerPrice = 100;

export const menu: MenuItem[] = [
  { id: 'coxinha', image: '/images/salgados/coxinha-de-frango.webp' },
  { id: 'bolinhoQueijo', image: '/images/salgados/bolinho-de-queijo.webp' },
  { id: 'bolinhoCarne', image: '/images/salgados/bolinho-de-carne.webp' },
  { id: 'bolinhaPizza', image: '/images/salgados/bolinho-de-pizza.webp' },
  { id: 'kibe', image: '/images/salgados/kibe.webp' },
];
