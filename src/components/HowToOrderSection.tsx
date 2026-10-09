import { ui, type Lang } from '../i18n/ui';

export default function HowToOrderSection({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section id="como-pedir" className="section">
      <div className="container">
        <h2 className="section__title">{t.howToOrder.title}</h2>
        <ol className="steps">
          {t.howToOrder.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
