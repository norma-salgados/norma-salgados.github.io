import WhatsAppIcon from './WhatsAppIcon';
import { ui, type Lang } from '../i18n/ui';
import { whatsappLink } from '../config/site';

interface Props {
  lang: Lang;
  name: string;
  description: string;
  image?: string;
  /** Etiqueta ao lado do nome, ex: "25 g" */
  badge?: string;
  /** Preço exibido no card, ex: "¥6.000 o cento" */
  price?: string;
}

export default function MenuCard({ lang, name, description, image, badge, price }: Props) {
  const t = ui[lang];

  return (
    <li className="card">
      <div className="card__media">
        {image ? (
          <img src={image} alt={name} loading="lazy" decoding="async" />
        ) : (
          <div className="card__placeholder">{t.photoSoon}</div>
        )}
      </div>
      <div className="card__body">
        <div className="card__head">
          <h3>{name}</h3>
          {badge && <span className="card__weight">{badge}</span>}
        </div>
        <p>{description}</p>
        {price && <p className="card__price">{price}</p>}
        <a href={whatsappLink(t.whatsappItemMessage(name))} className="card__cta" data-goatcounter-click={`whatsapp-item: ${name}`} target="_blank" rel="noopener">
          <WhatsAppIcon size={16} />
          {t.menu.ask}
        </a>
      </div>
    </li>
  );
}
