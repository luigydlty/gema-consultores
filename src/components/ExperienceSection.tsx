import { useEffect, useState, useCallback } from "react";
import WaveSeparator from "./WaveSeparator";
import { useInView } from "@/hooks/useInView";

import gobernacionImg from "@/assets/clients/gobernacion-atlantico.png";
import alcaldiaImg from "@/assets/clients/alcaldia-santa-marta.png";
import universidadImg from "@/assets/clients/universidad-atlantico.png";
import ejercitoImg from "@/assets/clients/ejercito-nacional.png";
import clubImg from "@/assets/clients/club-leones.png";

const clients = [
  { name: "Gobernación del Atlántico", service: "Comunicación institucional", logo: gobernacionImg },
  { name: "Alcaldía de Santa Marta", service: "Posicionamiento de marca", logo: alcaldiaImg },
  { name: "Universidad del Atlántico", service: "Marketing digital", logo: universidadImg },
  { name: "Ejército Nacional", service: "Estrategia comunicacional", logo: ejercitoImg },
  { name: "Club de Leones Internacional", service: "Relacionamiento institucional", logo: clubImg },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useInView();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % clients.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section id="experiencia" className="relative bg-card py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Experiencia en comunicación y posicionamiento institucional
          </h2>
          <p className="text-foreground-secondary font-body leading-relaxed">
            Hemos desarrollado estrategias para organizaciones del sector público y privado en Colombia, logrando mejoras en visibilidad, reputación y relacionamiento.
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`relative max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-background rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center min-h-[320px] justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mb-6">
              <img
                src={clients[current].logo}
                alt={clients[current].name}
                className="max-w-full max-h-full object-contain transition-opacity duration-500"
              />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-lg md:text-xl mb-1">
              {clients[current].name}
            </h3>
            <p className="text-foreground-secondary font-body text-sm">
              {clients[current].service}
            </p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:brightness-110 transition"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:brightness-110 transition"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-7" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir a cliente ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <WaveSeparator fillColor="hsl(0, 0%, 100%)" variant="soft" />
    </section>
  );
};

export default ExperienceSection;
