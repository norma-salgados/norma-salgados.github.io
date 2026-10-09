import { languages, langShort, pathFor, ui, type Lang } from '../i18n/ui';
import { site } from '../config/site';

export default function Header({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <header className="header">
      <div className="container header__inner">
        <a href={pathFor(lang)} className="brand">
          <span className="brand__name">{site.name}</span>
        </a>

        <nav className="nav" aria-label="Main">
          <a href="#cardapio">{t.nav.menu}</a>
          <a href="#doces">{t.nav.sweets}</a>
          <a href="#entrega">{t.nav.delivery}</a>
          <a href="#sobre">{t.nav.about}</a>
          <a href="#como-pedir">{t.nav.howToOrder}</a>
          <a href="#contato">{t.nav.contact}</a>
        </nav>

        <div className="lang-switch" role="group" aria-label={t.languageLabel}>
          {(Object.keys(languages) as Lang[]).map((l) => (
            <a
              key={l}
              href={pathFor(l)}
              hrefLang={l}
              lang={l}
              title={languages[l]}
              aria-current={l === lang ? 'true' : undefined}
            >
              {langShort[l]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
