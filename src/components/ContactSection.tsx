import WhatsAppIcon from './WhatsAppIcon';
import { ui, type Lang } from '../i18n/ui';
import { mapsEmbedLink, mapsLink, mapsQuery, site, whatsappLink } from '../config/site';

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const telHref = `tel:${site.phoneDisplay.replace(/-/g, '')}`;

  return (
    <section id="contato" className="section contact">
      <div className="container contact__inner">
        <h2 className="section__title">{t.contact.title}</h2>
        <a href={whatsappLink(t.whatsappMessage)} className="btn btn--wa btn--lg" target="_blank" rel="noopener">
          <WhatsAppIcon size={26} />
          {t.contact.cta}
        </a>
        <p className="contact__phone">
          {t.contact.phoneLabel}: <a href={telHref}>{site.phoneDisplay}</a>
        </p>
        <address className="contact__address">
          {t.contact.addressLabel}:{' '}
          <a href={mapsLink(mapsQuery)} target="_blank" rel="noopener">
            <span lang="ja">〒{site.pickupPostalCode} {site.pickupAddress}</span>
          </a>
          {lang !== 'ja' && <span className="contact__romaji">{site.pickupAddressRomaji}</span>}
        </address>
        <iframe
          className="contact__map"
          src={mapsEmbedLink(mapsQuery, lang)}
          title={t.contact.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
