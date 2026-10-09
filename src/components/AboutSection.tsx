import { ui, type Lang } from '../i18n/ui';

export default function AboutSection({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section id="sobre" className="section section--alt">
      <div className="container about">
        <h2 className="section__title">{t.about.title}</h2>
        {t.about.text.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
