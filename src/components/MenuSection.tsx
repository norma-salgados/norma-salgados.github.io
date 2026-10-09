import MenuCard from './MenuCard';
import { htmlLang, ui, type Lang } from '../i18n/ui';
import { itemWeightGrams, menu, priceYen } from '../config/menu';

export default function MenuSection({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section id="cardapio" className="section">
      <div className="container">
        <h2 className="section__title">{t.menu.title}</h2>
        <p className="section__subtitle">{t.menu.subtitle}</p>
        <div className="price-tag">
          <dl className="price-tag__list">
            {(['fried', 'frozen'] as const).map((kind) => (
              <div key={kind} className="price-tag__item">
                <dt>{t.menu.priceLabels[kind]}</dt>
                <dd className="price-tag__value">{t.menu.formatPrice(priceYen[kind].toLocaleString(htmlLang[lang]))}</dd>
              </div>
            ))}
          </dl>
          {t.menu.priceDetail.map((line) => (
            <p key={line} className="price-tag__detail">{line}</p>
          ))}
        </div>
        <ul className="menu-grid">
          {menu.map((item) => (
            <MenuCard
              key={item.id}
              lang={lang}
              name={t.menu.items[item.id].name}
              description={t.menu.items[item.id].description}
              image={item.image}
              badge={`${itemWeightGrams} g`}
            />
          ))}
        </ul>
        <p className="menu-note">{t.menu.photoNote}</p>
      </div>
    </section>
  );
}
