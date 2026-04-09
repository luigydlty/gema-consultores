import { Search, Target, Rocket, TrendingUp, type LucideIcon } from "lucide-react";
import WaveSeparator from "./WaveSeparator";
import { useInView } from "@/hooks/useInView";

const steps: { num: number; title: string; description: string; icon: LucideIcon; accent: boolean }[] = [
  { num: 1, title: "Diagnóstico", description: "Análisis profundo de la situación actual de comunicación y marca.", icon: Search, accent: false },
  { num: 2, title: "Estrategia", description: "Definición de objetivos claros y un plan de acción medible.", icon: Target, accent: false },
  { num: 3, title: "Implementación", description: "Ejecución disciplinada alineada a los resultados esperados.", icon: Rocket, accent: false },
  { num: 4, title: "Medición", description: "Evaluación de impacto con indicadores y mejora continua.", icon: TrendingUp, accent: true },
];

const MethodologySection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="metodologia" className="relative bg-background py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-body font-medium tracking-widest uppercase text-gema-orange mb-3">
            Cómo trabajamos
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Metodología orientada a resultados
          </h2>
          <p className="text-foreground-secondary font-body leading-relaxed">
            Un modelo estructurado que garantiza coherencia, control y medición en cada proyecto.
          </p>
        </div>

        {/* Horizontal stepper - desktop / Vertical cards - mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/40 to-gema-orange/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`group relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Step card */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <div
                    className={`relative z-10 w-[4.25rem] h-[4.25rem] rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-105 ${
                      step.accent
                        ? "bg-gema-orange text-gema-orange-foreground shadow-gema-orange/25"
                        : "bg-primary text-primary-foreground shadow-primary/20"
                    }`}
                  >
                    <step.icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/40 p-6 pt-5 w-full group-hover:border-gema-orange/20 group-hover:shadow-lg group-hover:shadow-gema-orange/[0.05] transition-all duration-300">
                    <span className="inline-block text-xs font-body font-medium text-gema-orange/70 mb-1 tracking-wider">
                      PASO {step.num}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-foreground-secondary font-body text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-foreground-secondary font-body mt-14 max-w-lg mx-auto text-sm">
          Acompañamos cada etapa para asegurar que la comunicación genere valor y posicionamiento real.
        </p>
      </div>
      <WaveSeparator fillColor="hsl(210, 20%, 97%)" variant="soft" />
    </section>
  );
};

export default MethodologySection;
