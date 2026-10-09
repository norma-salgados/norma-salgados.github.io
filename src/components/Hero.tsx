import WhatsAppIcon from './WhatsAppIcon';
import { ui, type Lang } from '../i18n/ui';
import { site, whatsappLink } from '../config/site';

export default function Hero({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 className="eyebrow">{t.hero.tagline}</h1>
        <p className="hero__title">{t.hero.title}</p>
        {site.logo && (
          <img src={site.logo} alt={site.name} className="hero__logo" width={680} height={784} fetchPriority="high" />
        )}
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href={whatsappLink(t.whatsappMessage)} className="btn btn--wa" target="_blank" rel="noopener">
            <WhatsAppIcon size={22} />
            {t.hero.cta}
          </a>
          <a href="#cardapio" className="btn btn--ghost">{t.hero.secondary}</a>
        </div>
      </div>
    </section>
  );
}
