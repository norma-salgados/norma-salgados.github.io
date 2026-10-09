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
  /** Perfil da Empresa no Google (link de compartilhamento) */
  googleBusinessUrl: 'https://share.google/bc50j7mSvtVmaz4LA',
  /** Código da conta do GoatCounter (contador de visitas). Vazio = contador desligado */
  goatcounterCode: 'normasalgados' as string,
  /** Imagem de prévia ao compartilhar o link (WhatsApp, LINE, Facebook) — 1200×630 */
  ogImage: '/og-image.jpg',
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Busca usada nos mapas: nome + endereço faz o Google abrir o Perfil da Empresa, não só o endereço */
export const mapsQuery = `${site.name} ${site.pickupAddress}`;

export function mapsLink(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/** URL do mapa embutido (iframe) do Google Maps — não precisa de chave de API */
export function mapsEmbedLink(address: string, lang: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&hl=${lang}&z=16&output=embed`;
}
