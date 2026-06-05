import {
  ArrowRight,
  Brush,
  CalendarDays,
  Frame,
  GalleryHorizontal,
  Image,
  Mail,
  Send,
  ShoppingBag,
} from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import AnimatedList from "@/components/react-bits/animated-list";
import HoverPreview from "@/components/react-bits/hover-preview";
import InfiniteGallery from "@/components/react-bits/infinite-gallery";
import ParallaxCarousel from "@/components/react-bits/parallax-carousel";
import PixelReveal from "@/components/react-bits/pixel-reveal";
import Watercolor from "@/components/react-bits/watercolor";
import { avocadoCheckout, hasAvocadoPaymentLink } from "@/data/checkout";
import {
  artwork,
  heroArtwork,
  landscapeFourByThreeArtwork,
  portraitFourByFiveArtwork,
  portraitThreeByFourArtwork,
  processArtwork,
  squareArtwork,
} from "@/data/artwork";

const processSteps = [
  {
    title: "Skizze",
    body: "Ein kurzer Aufbau legt Licht, Blickrichtung und die grobe Spannung im Motiv fest.",
  },
  {
    title: "Farbe",
    body: "Kalte Blauwerte, saftiges Gruen und pinke Flaechen werden direkt gegeneinander gesetzt.",
  },
  {
    title: "Schichtung",
    body: "Sichtbare Striche bleiben stehen, damit Oberflaeche und Material nicht glatt poliert wirken.",
  },
  {
    title: "Finish",
    body: "Kanten, Schatten und Akzente werden reduziert, bis das Bild im Raum ruhig stehen kann.",
  },
];

const processListItems = processSteps.map((step, index) => ({
  id: step.title,
  content: (
    <div className="process-copy">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </div>
  ),
}));

const commissionCards = [
  {
    title: "Originale",
    body: "Einzelstuecke aus laufenden Serien, inklusive Formatberatung und Versandabstimmung.",
    icon: Image,
  },
  {
    title: "Auftragsarbeit",
    body: "Stillleben oder Motividee nach persoenlichem Briefing, mit klarer Skizzenfreigabe.",
    icon: Brush,
  },
  {
    title: "Prints und Drops",
    body: "Limitierte Editionsflaechen fuer kleinere Raeume, Social-Formate und Sammlungen.",
    icon: Frame,
  },
  {
    title: "Atelierbesuch",
    body: "Ruhiger Termin zum Sehen, Vergleichen und Auswaehlen verfuegbarer Arbeiten.",
    icon: CalendarDays,
  },
];

const previewLinks = [
  {
    text: "Stillleben",
    linkUrl: "#gallery",
    imageUrl: squareArtwork.src,
    altText: squareArtwork.title,
  },
  {
    text: "Originale",
    linkUrl: "#featured",
    imageUrl: portraitThreeByFourArtwork.src,
    altText: portraitThreeByFourArtwork.title,
  },
  {
    text: "Auftrag",
    linkUrl: "#commissions",
    imageUrl: portraitFourByFiveArtwork.src,
    altText: portraitFourByFiveArtwork.title,
  },
  {
    text: "Atelier",
    linkUrl: "#process",
    imageUrl: landscapeFourByThreeArtwork.src,
    altText: landscapeFourByThreeArtwork.title,
  },
];

const galleryImages = artwork.map((piece) => ({
  url: piece.src,
  width: piece.width,
  height: piece.height,
}));

const carouselImages = artwork.map((piece) => piece.src);

export default function App() {
  const [formState, setFormState] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    event.currentTarget.reset();
    setFormState("sent");
  }

  return (
    <div className="bg-atelier-ink text-atelier-cream min-h-screen">
      <a className="skip-link" href="#main">
        Zum Inhalt
      </a>
      <SiteNav />
      <main id="main">
        <HeroSection />
        <GallerySection />
        <BuySection />
        <ProcessSection />
        <CommissionsSection />
        <ContactSection formState={formState} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}

function SiteNav() {
  return (
    <header className="border-atelier-glass bg-atelier-ink/84 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Hauptnavigation"
      >
        <a
          className="text-atelier-cream font-serif text-xl font-semibold"
          href="#"
        >
          Atelier Bella
        </a>
        <div className="text-atelier-muted hidden items-center gap-7 text-sm font-medium md:flex">
          <a className="nav-link" href="#gallery">
            Arbeiten
          </a>
          <a className="nav-link" href="#process">
            Atelier
          </a>
          <a className="nav-link" href="#commissions">
            Auftraege
          </a>
          <a className="nav-link" href="#buy">
            Kaufen
          </a>
          <a className="nav-link" href="#contact">
            Kontakt
          </a>
        </div>
        <a className="icon-cta" href="#buy" aria-label="Avocado Bild kaufen">
          <ShoppingBag size={18} />
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="border-atelier-glass bg-atelier-ink relative isolate overflow-hidden border-b pt-24">
      <Watercolor
        className="pointer-events-none absolute inset-0 -z-20"
        width="100%"
        height="100%"
        color1="#0b1e2d"
        color2="#e64992"
        saturation={0.75}
        brightness={0.03}
        opacity={0.55}
        speed={0.28}
        scale={0.8}
        cursorInteraction
        cursorIntensity={0.45}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(7,16,22,0.72),rgba(7,16,22,0.25)_52%,rgba(7,16,22,0.88))]" />

      <div className="mx-auto grid min-h-[88svh] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="max-w-2xl">
          <p className="section-kicker text-atelier-turquoise">
            Online Atelier
          </p>
          <h1 className="text-atelier-cream mt-5 font-serif text-5xl leading-[1.02] font-semibold md:text-7xl">
            Atelier Bella
          </h1>
          <p className="text-atelier-muted mt-6 max-w-xl text-lg leading-8 md:text-xl">
            Farbe, Struktur und Originale: expressive Stillleben und
            Auftragsarbeiten mit kraeftiger Farbe, sichtbarer Textur und
            persoenlicher Handschrift.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="primary-cta" href="#buy">
              Avocado kaufen
              <ArrowRight size={18} />
            </a>
            <a className="secondary-cta" href="#gallery">
              Arbeiten ansehen
            </a>
          </div>
        </div>

        <div className="hero-artwork-frame">
          <PixelReveal
            imageSrc={heroArtwork.src}
            className="aspect-[16/10] h-full min-h-[360px] lg:min-h-[620px]"
            width="100%"
            height="100%"
            gridSize={18}
            transitionColor="#071016"
            direction="up"
            duration={1.6}
            triggerOnce
            borderRadius={8}
          >
            <span className="sr-only">{heroArtwork.title}</span>
          </PixelReveal>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="section-shell bg-atelier-night">
      <div className="section-heading">
        <p className="section-kicker text-atelier-pink">Galerie</p>
        <h2 className="section-title">
          Arbeiten, die von Textur und Farbe leben.
        </h2>
      </div>

      <div className="border-atelier-glass bg-atelier-ink hidden h-[720px] overflow-hidden border md:block">
        <InfiniteGallery
          images={galleryImages}
          width="100%"
          height="100%"
          density={4}
          imageSize={15}
          cellSize={112}
          viewRange={2}
          dragSpeed={0.85}
          driftAmount={6}
          backgroundColor="#071016"
          fogColor="#071016"
          imageRadius={0.02}
        />
      </div>
      <div className="border-atelier-glass bg-atelier-ink h-[430px] overflow-hidden border md:hidden">
        <ParallaxCarousel
          images={carouselImages}
          imageWidth={280}
          imageHeight={360}
          gap={24}
          borderRadius={8}
          autoplaySpeed={12}
          showProgress
          className="h-full"
        />
      </div>

      <div className="border-atelier-glass mt-14 border-y py-8">
        <HoverPreview
          content="Serien ansehen: {0}, {1}, {2}, {3}."
          targets={previewLinks}
          imagePosition="right"
          imageWidth={300}
          imageHeight={220}
          imageBorderRadius="8px"
          className="text-atelier-cream font-serif text-3xl leading-tight md:text-5xl"
          targetClassName="text-atelier-green hover:text-atelier-pink"
          onTargetClick={(target) => {
            if (target.linkUrl) {
              window.location.href = target.linkUrl;
            }
          }}
        />
      </div>
    </section>
  );
}

function BuySection() {
  return (
    <section id="buy" className="section-shell bg-atelier-ink">
      <div className="buy-panel">
        <div className="buy-artwork">
          <img
            src={squareArtwork.src}
            alt={squareArtwork.title}
            width={squareArtwork.width}
            height={squareArtwork.height}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="buy-copy">
          <p className="section-kicker text-atelier-green">Direktkauf</p>
          <h2 className="section-title mt-4">{avocadoCheckout.title}</h2>
          <p className="text-atelier-muted mt-5 max-w-xl text-lg leading-8">
            Digitaler Avocado-Kunstdruck aus Bellas farbstarkem Stillleben:
            sichtbare Pinselstruktur, leuchtende Gelb-Gruen-Werte und ein
            dunkler Galerierahmen fuer den direkten ersten Drop.
          </p>
          <div className="buy-meta">
            <span>{avocadoCheckout.priceLabel}</span>
            <span>Einmalzahlung via Stripe</span>
          </div>
          {hasAvocadoPaymentLink ? (
            <a
              className="primary-cta"
              href={avocadoCheckout.paymentLink}
              rel="noreferrer"
              target="_blank"
            >
              Jetzt kaufen
              <ShoppingBag size={18} />
            </a>
          ) : (
            <a className="primary-cta pending-cta" href="#contact">
              Stripe-Link fehlt
              <Mail size={18} />
            </a>
          )}
          <p className="text-atelier-muted mt-4 text-sm leading-6">
            Der Checkout wird als Stripe Payment Link geoeffnet, sobald der
            Live-Link mit Schreibrechten erstellt wurde.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-shell bg-atelier-night">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker text-atelier-green">Atelier</p>
          <h2 className="section-title mt-4">
            Handarbeit mit sichtbarer Entscheidung.
          </h2>
          <p className="text-atelier-muted mt-5 max-w-xl text-lg leading-8">
            Jede Arbeit bleibt nah am Material: Pinselspur, Schichtung und
            kleine Kanten sind Teil des Bildes, nicht Stoerung.
          </p>
          <div className="border-atelier-glass mt-8 overflow-hidden border">
            <img
              src={processArtwork.src}
              alt={processArtwork.title}
              width={processArtwork.width}
              height={processArtwork.height}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
        <AnimatedList
          items={processListItems}
          autoAddDelay={0}
          animationType="blur"
          enterFrom="bottom"
          fadeEdges={false}
          height="620px"
          hoverEffect="scale"
          itemGap={12}
          maxItems={processListItems.length}
          renderItem={(item) => item.content}
          className="process-list"
        />
      </div>
    </section>
  );
}

function CommissionsSection() {
  return (
    <section id="commissions" className="section-shell bg-atelier-ink">
      <div className="section-heading">
        <p className="section-kicker text-atelier-pink">Auftraege</p>
        <h2 className="section-title">
          Klarer Weg zum Original, ohne Template-Gefuehl.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {commissionCards.map((card) => {
          const Icon = card.icon;

          return (
            <article className="service-card" key={card.title}>
              <div className="service-icon">
                <Icon size={22} />
              </div>
              <h3 className="text-atelier-cream mt-6 text-xl font-semibold">
                {card.title}
              </h3>
              <p className="text-atelier-muted mt-3 text-sm leading-6">
                {card.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection({
  formState,
  onSubmit,
}: {
  formState: "idle" | "sent";
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section
      id="contact"
      className="section-shell border-atelier-glass bg-atelier-night border-t"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker text-atelier-turquoise">Kontakt</p>
          <h2 className="section-title mt-4">
            Schreib kurz, welches Bild im Raum stehen soll.
          </h2>
          <p className="text-atelier-muted mt-5 max-w-xl text-lg leading-8">
            Fuer Originale, Auftragsarbeiten oder Ateliertermine reicht ein
            kurzer Einstieg. Details klaeren wir danach direkt.
          </p>
          <div className="text-atelier-green mt-8 flex items-center gap-3">
            <GalleryHorizontal size={20} />
            <span className="font-medium">Antwort mit Formatvorschlag</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input required name="name" autoComplete="name" />
          </label>
          <label>
            E-Mail
            <input required name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Anfrage
            <select name="request" defaultValue="Original">
              <option>Original</option>
              <option>Auftragsarbeit</option>
              <option>Prints</option>
              <option>Atelierbesuch</option>
            </select>
          </label>
          <label>
            Nachricht
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Format, Raum, Motividee oder Zeitfenster"
            />
          </label>
          <button className="primary-cta w-full justify-center" type="submit">
            Anfrage senden
            <Send size={18} />
          </button>
          {formState === "sent" ? (
            <p className="text-atelier-green text-sm font-medium">
              Anfrage notiert. Der naechste Schritt ist ein persoenliches
              Briefing.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
