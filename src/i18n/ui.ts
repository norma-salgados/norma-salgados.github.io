import type { MenuItemId } from '../config/menu';
import type { SweetId } from '../config/sweets';

export const languages = {
  pt: 'Português',
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

export const langShort: Record<Lang, string> = { pt: 'PT', ja: '日本語', en: 'EN' };
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', ja: 'ja' };

export function pathFor(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

interface Dictionary {
  meta: { title: string; description: string; ogLocale: string };
  nav: { menu: string; sweets: string; delivery: string; about: string; howToOrder: string; contact: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string; secondary: string };
  about: { title: string; text: string[] };
  menu: {
    title: string;
    subtitle: string;
    photoNote: string;
    priceLabels: { fried: string; frozen: string };
    formatPrice: (yen: string) => string;
    priceDetail: string[];
    ask: string;
    items: Record<MenuItemId, { name: string; description: string }>;
  };
  sweets: {
    title: string;
    /** Texto colado depois do preço, ex: "¥6.000" + " o cento" */
    priceUnits: { hundred: string; whole: string };
    items: Record<SweetId, { name: string; description: string }>;
  };
  delivery: {
    title: string;
    fried: { title: string; area: string; pickupLabel: string };
    frozen: { title: string; area: string };
    mapLink: string;
    shipping: string;
  };
  howToOrder: { title: string; steps: { title: string; text: string }[] };
  contact: { title: string; cta: string; phoneLabel: string; addressLabel: string; mapTitle: string };
  whatsappMessage: string;
  whatsappItemMessage: (item: string) => string;
  footer: { rights: string };
  floatingLabel: string;
  languageLabel: string;
  photoSoon: string;
}

export const ui: Record<Lang, Dictionary> = {
  pt: {
    meta: {
      title: 'Norma Salgados | Salgados brasileiros em Hamamatsu e Iwata',
      ogLocale: 'pt_BR',
      description:
        'Coxinha, bolinho de queijo, bolinho de carne, bolinho de pizza e kibe, além de brigadeiro, beijinho e bolo gelado. Fritos para Hamamatsu e região, congelados para todo o Japão. Encomende pelo WhatsApp!',
    },
    nav: { menu: 'Salgados', sweets: 'Doces', delivery: 'Entrega', about: 'Sobre', howToOrder: 'Como pedir', contact: 'Contato' },
    hero: {
      tagline: 'Salgados brasileiros em Hamamatsu e região',
      title: 'O sabor do Brasil, feito com carinho.',
      subtitle:
        'Salgados fresquinhos para festas, eventos e para matar a saudade. Faça sua encomenda direto pelo WhatsApp.',
      cta: 'Pedir pelo WhatsApp',
      secondary: 'Ver cardápio',
    },
    about: {
      title: 'Sobre nós',
      text: [
        'A Norma Salgados nasceu da vontade de trazer o gostinho de casa para quem vive no Japão.',
        'Nossos salgados são feitos com receitas de família e ingredientes selecionados — do jeitinho que a gente comia nas festas de aniversário no Brasil.',
      ],
    },
    menu: {
      title: 'Salgados',
      subtitle: 'Escolha seus sabores e faça o pedido pelo WhatsApp.',
      priceLabels: { fried: 'Fritos', frozen: 'Congelados' },
      formatPrice: (yen) => `¥${yen}`,
      priceDetail: ['o cento (100 unidades de 25 g)', 'pode misturar os sabores'],
      photoNote: '* Imagens ilustrativas.',
      ask: 'Pedir',
      items: {
        coxinha: { name: 'Coxinha de frango', description: 'Massa macia recheada com frango temperado.' },
        bolinhoCarne: { name: 'Bolinho de carne', description: 'Bolinho recheado com carne moída temperada.' },
        bolinhoQueijo: { name: 'Bolinho de queijo', description: 'Crocante por fora, queijo derretido por dentro.' },
        bolinhaPizza: { name: 'Bolinho de pizza', description: 'Recheado com presunto e queijo.' },
        kibe: { name: 'Kibe', description: 'Trigo e carne moída com hortelã, frito e crocante.' },
      },
    },
    sweets: {
      title: 'Doces',
      priceUnits: { hundred: ' o cento', whole: ' (inteiro)' },
      items: {
        brigadeiro: { name: 'Brigadeiro', description: 'Docinho de chocolate com granulado.' },
        beijinho: { name: 'Beijinho', description: 'Docinho de coco com coco ralado.' },
        boloGelado: { name: 'Bolo gelado', description: 'Bolo gelado de doce de leite com nozes.' },
      },
    },
    delivery: {
      title: 'Entrega e retirada',
      fried: {
        title: 'Salgados fritos',
        area: 'Para Hamamatsu e região.',
        pickupLabel: 'Local de retirada',
      },
      frozen: { title: 'Salgados congelados', area: 'Enviamos para todo o Japão.' },
      mapLink: 'Ver no mapa',
      shipping: 'Frete a combinar.',
    },
    howToOrder: {
      title: 'Como pedir',
      steps: [
        { title: 'Chame no WhatsApp', text: 'Mande uma mensagem com os salgados e a quantidade.' },
        { title: 'Combine os detalhes', text: 'Confirmamos quantidade, data e forma de retirada ou entrega.' },
        { title: 'Aproveite!', text: 'Receba seus salgados fresquinhos e bom apetite!' },
      ],
    },
    contact: {
      title: 'Faça sua encomenda',
      cta: 'Falar no WhatsApp',
      phoneLabel: 'Telefone',
      addressLabel: 'Endereço',
      mapTitle: 'Mapa do local de retirada',
    },
    whatsappMessage: 'Olá, Norma Salgados! Gostaria de fazer uma encomenda.',
    whatsappItemMessage: (item) => `Olá, Norma Salgados! Gostaria de encomendar ${item}.`,
    footer: { rights: 'Todos os direitos reservados.' },
    floatingLabel: 'Pedir pelo WhatsApp',
    languageLabel: 'Idioma',
    photoSoon: 'Foto em breve',
  },
  en: {
    meta: {
      title: 'Norma Salgados | Brazilian Snacks in Hamamatsu & Iwata, Japan',
      ogLocale: 'en_US',
      description:
        'Coxinha, cheese balls, beef croquettes, pizza balls and kibe, plus brigadeiro, beijinho and bolo gelado. Fried for Hamamatsu and area, frozen shipped anywhere in Japan. Order via WhatsApp!',
    },
    nav: { menu: 'Savory snacks', sweets: 'Sweets', delivery: 'Delivery', about: 'About', howToOrder: 'How to order', contact: 'Contact' },
    hero: {
      tagline: 'Brazilian savory snacks in Hamamatsu & area',
      title: 'A taste of Brazil, made with love.',
      subtitle:
        'Freshly made salgados for parties, events, or whenever you miss home. Order directly on WhatsApp.',
      cta: 'Order on WhatsApp',
      secondary: 'See the menu',
    },
    about: {
      title: 'About us',
      text: [
        'Norma Salgados was born from the wish to bring a taste of home to people living in Japan.',
        'Our salgados are made with family recipes and carefully chosen ingredients — just like the ones served at birthday parties back in Brazil.',
      ],
    },
    menu: {
      title: 'Savory snacks',
      subtitle: 'Pick your flavors and order on WhatsApp.',
      priceLabels: { fried: 'Fried', frozen: 'Frozen' },
      formatPrice: (yen) => `¥${yen}`,
      priceDetail: ['per 100 pieces (25 g each)', 'mix and match flavors'],
      photoNote: '* Images are for illustration only.',
      ask: 'Order',
      items: {
        coxinha: { name: 'Chicken coxinha', description: 'Soft dough filled with seasoned shredded chicken.' },
        bolinhoCarne: { name: 'Beef croquette', description: 'Croquette filled with seasoned ground beef.' },
        bolinhoQueijo: { name: 'Cheese balls', description: 'Crispy outside, melted cheese inside.' },
        bolinhaPizza: { name: 'Pizza balls', description: 'Filled with ham and cheese.' },
        kibe: { name: 'Kibe', description: 'Bulgur and ground beef with mint, fried until crispy.' },
      },
    },
    sweets: {
      title: 'Sweets',
      priceUnits: { hundred: ' per 100', whole: ' (whole cake)' },
      items: {
        brigadeiro: { name: 'Brigadeiro', description: 'Chocolate fudge ball rolled in sprinkles.' },
        beijinho: { name: 'Beijinho', description: 'Coconut fudge ball rolled in grated coconut.' },
        boloGelado: { name: 'Bolo gelado', description: 'Chilled cake with dulce de leche and walnuts.' },
      },
    },
    delivery: {
      title: 'Delivery & pickup',
      fried: {
        title: 'Fried salgados',
        area: 'For Hamamatsu and the surrounding area.',
        pickupLabel: 'Pickup location',
      },
      frozen: { title: 'Frozen salgados', area: 'We ship anywhere in Japan.' },
      mapLink: 'View on map',
      shipping: 'Shipping fee to be arranged.',
    },
    howToOrder: {
      title: 'How to order',
      steps: [
        { title: 'Message us on WhatsApp', text: 'Tell us which salgados you want and how many.' },
        { title: 'Confirm the details', text: 'We confirm quantity, date and pickup or delivery.' },
        { title: 'Enjoy!', text: 'Get your freshly made salgados and enjoy!' },
      ],
    },
    contact: {
      title: 'Place your order',
      cta: 'Chat on WhatsApp',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      mapTitle: 'Map of the pickup location',
    },
    whatsappMessage: 'Hello, Norma Salgados! I would like to place an order.',
    whatsappItemMessage: (item) => `Hello, Norma Salgados! I would like to order ${item}.`,
    footer: { rights: 'All rights reserved.' },
    floatingLabel: 'Order on WhatsApp',
    languageLabel: 'Language',
    photoSoon: 'Photo coming soon',
  },
  ja: {
    meta: {
      title: 'Norma Salgados | 浜松・磐田のブラジル惣菜（コシーニャ・キビ）',
      ogLocale: 'ja_JP',
      description:
        'コシーニャ、チーズボール、ミートボール、ピザボール、キビ、ブリガデイロなどのスイーツも。揚げたては浜松周辺、冷凍は全国発送。ご注文はWhatsAppで！',
    },
    nav: { menu: 'サウガード', sweets: 'スイーツ', delivery: 'お届け', about: '私たちについて', howToOrder: 'ご注文方法', contact: 'お問い合わせ' },
    hero: {
      tagline: '浜松エリアのブラジル惣菜スナック',
      title: '心をこめて作る、ブラジルの味。',
      subtitle:
        'パーティーやイベントに、できたてのサウガードを。ご注文はWhatsAppからお気軽にどうぞ。',
      cta: 'WhatsAppで注文',
      secondary: 'メニューを見る',
    },
    about: {
      title: '私たちについて',
      text: [
        'Norma Salgadosは、日本で暮らす皆さまに「ふるさとの味」を届けたいという想いから生まれました。',
        '家族のレシピと厳選した材料を使っています。ブラジルの誕生日パーティーで食べた、あの懐かしい味です。',
      ],
    },
    menu: {
      title: 'サウガード',
      subtitle: 'お好きな味を選んで、WhatsAppでご注文ください。',
      priceLabels: { fried: '揚げたて', frozen: '冷凍' },
      formatPrice: (yen) => `${yen}円`,
      priceDetail: ['100個あたり（1個25g）', '味の組み合わせ自由'],
      photoNote: '※ 写真はイメージです。',
      ask: '注文',
      items: {
        coxinha: { name: 'コシーニャ（鶏肉）', description: '味付けした鶏肉を包んだ、もちっとした生地のコロッケ。' },
        bolinhoCarne: { name: 'ミートボール', description: '味付けした牛挽肉を包んだ揚げボール。' },
        bolinhoQueijo: { name: 'チーズボール', description: '外はカリッと、中はとろけるチーズ。' },
        bolinhaPizza: { name: 'ピザボール', description: 'ハムとチーズ入り。' },
        kibe: { name: 'キビ', description: '挽肉と挽き割り小麦、ミント入りのカリッと揚げ物。' },
      },
    },
    sweets: {
      title: 'スイーツ',
      priceUnits: { hundred: '／100個', whole: '／1ホール' },
      items: {
        brigadeiro: { name: 'ブリガデイロ', description: 'チョコスプレーをまぶした一口チョコ菓子。' },
        beijinho: { name: 'ベイジーニョ', description: 'ココナッツファインをまぶしたココナッツの一口菓子。' },
        boloGelado: { name: 'ボーロ・ジェラード', description: 'ミルクキャラメル（ドゥルセ・デ・レチェ）とくるみの冷たいケーキ。' },
      },
    },
    delivery: {
      title: 'お届け・受け取り',
      fried: {
        title: '揚げたてサウガード',
        area: '浜松市とその周辺地域が対象です。',
        pickupLabel: '受け取り場所',
      },
      frozen: { title: '冷凍サウガード', area: '日本全国へ発送します。' },
      mapLink: '地図で見る',
      shipping: '送料は別途ご相談ください。',
    },
    howToOrder: {
      title: 'ご注文方法',
      steps: [
        { title: 'WhatsAppで連絡', text: 'ご希望の商品と数量をメッセージでお送りください。' },
        { title: '詳細を確認', text: '数量・日時・受け取り方法をご案内します。' },
        { title: 'お楽しみください！', text: 'できたてのサウガードをどうぞ！' },
      ],
    },
    contact: {
      title: 'ご注文はこちら',
      cta: 'WhatsAppで問い合わせ',
      phoneLabel: '電話番号',
      addressLabel: '住所',
      mapTitle: '受け取り場所の地図',
    },
    whatsappMessage: 'こんにちは、Norma Salgadosさん！注文をお願いしたいです。',
    whatsappItemMessage: (item) => `こんにちは、Norma Salgadosさん！${item}を注文したいです。`,
    footer: { rights: 'All rights reserved.' },
    floatingLabel: 'WhatsAppで注文',
    languageLabel: '言語',
    photoSoon: '写真は近日公開',
  },
};
