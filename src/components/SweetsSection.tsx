import MenuCard from './MenuCard';
import { htmlLang, ui, type Lang } from '../i18n/ui';
import { sweets } from '../config/sweets';

export default function SweetsSection({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section id="doces" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.sweets.title}</h2>
        <ul className="menu-grid">
          {sweets.map((item) => (
            <MenuCard
              key={item.id}
              lang={lang}
              name={t.sweets.items[item.id].name}
              description={t.sweets.items[item.id].description}
              image={item.image}
              badge={item.weightGrams ? `${item.weightGrams} g` : undefined}
              price={
                t.menu.formatPrice(item.price.yen.toLocaleString(htmlLang[lang])) + t.sweets.priceUnits[item.price.unit]
              }
            />
          ))}
        </ul>
        {sweets.some((item) => item.image) && <p className="menu-note">{t.menu.photoNote}</p>}
      </div>
    </section>
  );
}
