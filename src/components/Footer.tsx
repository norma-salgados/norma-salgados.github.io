import { ui, type Lang } from '../i18n/ui';
import { site } from '../config/site';

export default function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} {site.name}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
