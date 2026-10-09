export const site = {
  name: 'Norma Salgados',
  phoneDisplay: '070-8972-8458',
  /** Número no formato internacional (Japão +81, sem o 0 inicial) para o link do WhatsApp */
  whatsappNumber: '817089728458',
  /** Logo exibida no topo da página (hero) */
  logo: '/images/logo.webp' as string | undefined,
  /** Endereço de retirada (salgados fritos), exibido em japonês em todos os idiomas */
  pickupPostalCode: '438-0205',
  pickupAddress: '静岡県磐田市堀之内1640-27',
  pickupAddressRomaji: '〒438-0205 Shizuoka-ken Iwata-shi Horinouchi 1640-27',
  /** Endereço separado em partes, usado nos dados estruturados (SEO) */
  pickupAddressParts: { region: '静岡県', locality: '磐田市', street: '堀之内1640-27' },
  /** Imagem de prévia ao compartilhar o link (WhatsApp, LINE, Facebook) — 1200×630 */
  ogImage: '/og-image.jpg',
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsLink(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
