import { ui, type Lang } from '../i18n/ui';
import { mapsLink, mapsQuery, site } from '../config/site';

export default function DeliverySection({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section id="entrega" className="section">
      <div className="container">
        <h2 className="section__title">{t.delivery.title}</h2>
        <div className="delivery">
          <div className="delivery__card">
            <h3>{t.delivery.fried.title}</h3>
            <p>{t.delivery.fried.area}</p>
            <p className="delivery__label">{t.delivery.fried.pickupLabel}</p>
            <address className="delivery__address">
              <span lang="ja">〒{site.pickupPostalCode} {site.pickupAddress}</span>
              {lang !== 'ja' && <span className="delivery__romaji">{site.pickupAddressRomaji}</span>}
            </address>
            <a href={mapsLink(mapsQuery)} className="delivery__map" target="_blank" rel="noopener">
              {t.delivery.mapLink} →
            </a>
          </div>
          <div className="delivery__card">
            <h3>{t.delivery.frozen.title}</h3>
            <p>{t.delivery.frozen.area}</p>
          </div>
        </div>
        <p className="delivery__note">{t.delivery.shipping}</p>
      </div>
    </section>
  );
}
