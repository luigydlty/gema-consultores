import heroBg from "@/assets/hero-bg.jpg";
import WaveSeparator from "./WaveSeparator";

const WHATSAPP_URL = "https://wa.me/573158888012?text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20mi%20organizaci%C3%B3n.";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <img
      src={heroBg}
      alt="Reunión corporativa de consultoría estratégica"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-primary/85" />

    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight text-balance">
          Consultoría en comunicación estratégica y marketing digital en Barranquilla
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/80 font-body leading-relaxed max-w-xl">
          Impulsamos el crecimiento de empresas e instituciones mediante estrategias de comunicación, posicionamiento de marca y marketing digital orientadas a resultados.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gema-orange text-gema-orange-foreground px-8 py-4 rounded-lg font-body font-medium hover:brightness-90 transition min-h-[44px]"
        >
          Solicitar diagnóstico estratégico
        </a>
      </div>
    </div>

    <WaveSeparator fillColor="hsl(0, 0%, 100%)" variant="soft" />
  </section>
);

export default HeroSection;
