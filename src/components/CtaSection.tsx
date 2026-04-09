import ctaBg from "@/assets/cta-bg.jpg";

const WHATSAPP_URL = "https://wa.me/573158888012?text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20mi%20organizaci%C3%B3n.";

const CtaSection = () => (
  <section id="cta-final" className="relative py-24 md:py-32 overflow-hidden">
    <img
      src={ctaBg}
      alt="Vista aérea de Barranquilla"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      width={1920}
      height={800}
    />
    <div className="absolute inset-0 bg-primary/90" />

    <div className="container relative z-10 text-center max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-6 text-balance">
        ¿Necesitas posicionar tu organización en Barranquilla?
      </h2>
      <p className="text-primary-foreground/80 font-body leading-relaxed mb-10 text-balance">
        Diseñamos estrategias de comunicación y marketing digital alineadas a tus objetivos. Convierte tu comunicación en una ventaja competitiva.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gema-orange text-gema-orange-foreground px-10 py-4 rounded-lg font-body font-medium hover:brightness-90 transition shadow-lg shadow-gema-orange/30"
      >
        Hablemos de tu estrategia
      </a>
    </div>
  </section>
);

export default CtaSection;
