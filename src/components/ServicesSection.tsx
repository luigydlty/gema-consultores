import { Megaphone, Award, Users, GraduationCap, FileText, BarChart3, type LucideIcon } from "lucide-react";
import WaveSeparator from "./WaveSeparator";
import { useInView } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/573158888012?text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20mi%20organizaci%C3%B3n.";

const services: { icon: LucideIcon; title: string; description: string; span?: string }[] = [
  {
    icon: Megaphone,
    title: "Comunicación estratégica",
    description: "Planes de comunicación alineados a objetivos organizacionales con enfoque en reputación y posicionamiento.",
    span: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    icon: BarChart3,
    title: "Marketing digital",
    description: "Redes sociales, contenido estratégico y campañas digitales orientadas a visibilidad y conversión.",
    span: "lg:col-span-2",
  },
  {
    icon: Award,
    title: "Posicionamiento de marca",
    description: "Identidad corporativa, branding y storytelling.",
  },
  {
    icon: Users,
    title: "Relacionamiento institucional",
    description: "Vínculos con medios, comunidades y grupos de interés.",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones empresariales",
    description: "Formación en comunicación, marketing digital, vocería y marca personal.",
    span: "lg:col-span-2",
  },
  {
    icon: FileText,
    title: "Desarrollo de contenidos",
    description: "Informes, discursos, páginas web y copy estratégico.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="servicios" className="relative bg-card py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-body font-medium tracking-widest uppercase text-gema-orange mb-3">
            Nuestros servicios
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Servicios de comunicación y marketing digital
          </h2>
          <p className="text-foreground-secondary font-body leading-relaxed">
            Soluciones integrales diseñadas para fortalecer tu marca y alcanzar resultados medibles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-primary/15 bg-background p-7 md:p-8 transition-all duration-500 hover:border-gema-orange/30 hover:shadow-xl hover:shadow-gema-orange/[0.07] hover:-translate-y-1 shadow-md shadow-primary/[0.06] ${service.span || ""} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Subtle glow - visible by default, intensifies on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gema-orange/[0.04] group-hover:bg-gema-orange/[0.08] transition-all duration-700 blur-3xl" />

              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-primary/30 to-gema-orange/30 group-hover:from-primary/50 group-hover:to-gema-orange/50 transition-all duration-500" />

              {/* Number watermark - more visible */}
              <span className="absolute top-4 right-5 text-[5rem] font-heading font-bold leading-none text-primary/[0.06] group-hover:text-gema-orange/[0.1] transition-colors duration-500 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-primary/10 to-gema-orange/10 group-hover:from-gema-orange/15 group-hover:to-gema-orange/5 transition-all duration-300 ring-1 ring-primary/15 group-hover:ring-gema-orange/25">
                  <service.icon className="w-5 h-5 text-gema-orange group-hover:text-gema-orange transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-[17px] mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gema-orange text-gema-orange-foreground px-8 py-4 rounded-xl font-body font-medium hover:brightness-90 transition shadow-lg shadow-gema-orange/20"
          >
            Agenda tu diagnóstico gratis
          </a>
        </div>
      </div>
      <WaveSeparator fillColor="hsl(0, 0%, 100%)" variant="minimal" />
    </section>
  );
};

export default ServicesSection;
