import Header from './Header';
import Hero from './Hero';
import MenuSection from './MenuSection';
import SweetsSection from './SweetsSection';
import DeliverySection from './DeliverySection';
import AboutSection from './AboutSection';
import HowToOrderSection from './HowToOrderSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import WhatsAppIcon from './WhatsAppIcon';
import { ui, type Lang } from '../i18n/ui';
import { whatsappLink } from '../config/site';

export default function Home({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <MenuSection lang={lang} />
        <SweetsSection lang={lang} />
        <DeliverySection lang={lang} />
        <AboutSection lang={lang} />
        <HowToOrderSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <a
        href={whatsappLink(t.whatsappMessage)}
        className="wa-float"
        data-goatcounter-click="whatsapp-flutuante"
        target="_blank"
        rel="noopener"
        aria-label={t.floatingLabel}
      >
        <WhatsAppIcon size={30} />
      </a>
    </>
  );
}
